(ns gadjett.async-utils
  #?(:cljs 
     (:require-macros [cljs.core.async.macros :refer [go go-loop]]))  
  (:require [clojure.string :as string]
            [clojure.core.match :refer [match]]
            #?@(:cljs [[clojure.core.async :refer [<! timeout alts!]]]
                :clj [[clojure.core.async :refer [<! timeout alts! go go-loop]]])))


;;Definitions:
;;* An *asynchronous function* is a function that returns a `core.async` channel

(defn aaaa-load-ns
  "
  ~~~klipse
  (require '[clojure.core.async :refer [<!]])
  (require-macros '[cljs.core.async.macros :refer [go go-loop]])  
  (require '[gadjett.async-utils :refer [safe-memoize-async memoize-async go-map go-map-object go-seq->map wait-for-msg wait-for-condition parallel safe-parallel safe-serial]])
  ~~~
  "
  [])

(defn safe-memoize-async
  "
  Usage: `(safe-memoize-async f success-test-fn)`

  Same as memoize-async, but will only memoize the result if it passes the `success-test-fn`.
  ~~~klipse
  (def foo (safe-memoize-async (fn [x]
                               (go
                                 (println \"running the function with: \" x)
                                 (if (zero? x)
                                   [:error]
                                   [:ok x])))
                             #(= :ok (first %))))

  (go (println (<! (foo 0)))
    (println (<! (foo 0)))
    (println (<! (foo 1)))
    (println (<! (foo 1))))
  ~~~
  "
  [f success-test-fn]
  (let [mem (atom {})]
    (fn [& args]
      (go
        (if-let [e (find @mem args)]
          (val e)
          (let [ret (<! (apply f args))]
            (when (success-test-fn ret)
              (swap! mem assoc args ret))
            ret))))))


(defn memoize-async
  "
  Usage: `(memoize-async f)`


  Same as [clojure.core.memoize](https://clojuredocs.org/clojure.core/memoize)  for asynchronous functions (e.g. functions that return a `chan`).
  Returns a channel with the memoized result of the function call.

  ~~~klipse
  
    (defn async-square [x]
      (go
        (* x x)))
  
    (go (println (<! ((memoize-async async-square) 4))))
  ~~~
  "
  [f]
  (safe-memoize-async f (fn [& args] (constantly true))))


(defn go-map
  "
  Usage: `(go-map f coll)`

  Returns a channel that will receive the result of `f` applied to 
  each item of `coll` once all the data is available.
  The calculations are done in parallel.
  
  ~~~klipse
  
    (defn async-square [x]
      (go
        (* x x)))

    (go (println (<! (go-map async-square [1 2 3]))))
  ~~~
  "
  [f coll]
  (let [chans (map f coll)
        chan->coll (zipmap chans coll)]
    (go-loop [res {} channels chans]
      (if (empty? channels)
        (map res coll)
        (let [[x c] (alts! channels)]
          (recur (assoc res (chan->coll c) x)
                 (remove #{c} channels)))))))

(defn- vec->map [vec]
  (into {} vec))

(defn- go-map-2d-vec [f m]
  (go-map (fn[[k id]] (go [k (<! (f id))])) m))

(defn go-map-object 
  "Usage: `(go-map-object f m)`

  Returns channel that will receive a map with the same keys as `m` and with the values transformed by `f`.
  Where `f` is an asynchronous function.

  ~~~klipse

    (defn async-square [x]
      (go
        (* x x)))

    (go (println (<!
     (go-map-object async-square {:a 1 :b 2}))))
  ~~~

  "
  [f m]
  (go
    (vec->map (<! (go-map-2d-vec f m)))))

(defn go-seq->map [f lst]
  (go
    (zipmap lst (<! (go-map f lst)))))

(defn wait-for-msg [c msg]
  (go
    (loop []
      (when-not (= msg (<! c))
        (recur)))))

(defn wait-for-condition
  "
  returns a channel that will be activated when the predicate `f` returns true.
  
  ~~~klipse
  (let [start (js/Date.)]
  (go 
    (println \"start:\" (js/Date.))
    (<! (wait-for-condition #(>= (- (js/Date.) start) 1000) 100))
    (println \"done:\" (js/Date.))))
  ~~~
  "
  [f interval-in-msec]
  (go-loop []
    (when-not (f)
      (<! (timeout interval-in-msec))
      (recur))))

(defn parallel 
  "Receives a sequence of channels and returns a channel which will receive
  a sequence with the result of all the channels.
  Data is read from the channels in parallel.
  The result is a sequence where each element in the sequence is the result
  of the corresponding channel in the sequence."
  [chans]
  (let [channel-indexes (zipmap chans (range (count chans)))]
    (go-loop [res (vec (range (count chans))) channels chans]
      (if (empty? channels)
        res
        (let [[data c] (alts! channels)]
          (recur (assoc res (channel-indexes c) data) (remove #{c} channels)))))))

(defn safe-parallel
  "Receives a sequence of channels and fail-test function and returns a channel which will receive
  a sequence with the result of all the channels or with error if one of the channels failed.
  Data is read from the channels in parallel.
  if one of the channels failed - according to the fail-test function the result is the error message
  in other case the result is a sequence where each element in the sequence is the result
  of the corresponding channel in the sequence."
  [chans]
  (let [channel-indexes (zipmap chans (range (count chans)))]
    (go-loop [res (vec (range (count chans))) channels chans]
      (if (empty? channels)
        [:ok res]
        (match  (alts! channels)
                [[:error error] _ ] [:error error]
                [[:ok data] c ] (recur (assoc res (channel-indexes c) data) (remove #{c} channels)))))))

(defn- select-vals-in-order
  "Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)"
  [map ks]
  (reduce #(conj %1 (map %2)) [] ks))

(defn safe-serial
  "Receives a vector of {:f-name name :f-deps dependent-functions :f async-function}, and runs the functions one after the other. Each function is called with the result of its dependent functnios.
  Returns a channel with the result of all the functions, or with an error if one of the functions failed."
  [functions]
  (go-loop [res {} fns functions]
    (if (empty? fns)
      [:ok res]
      (let [{:keys [f f-deps f-name]} (first fns)
            deps-res (select-vals-in-order res f-deps)]
        (match (<! (apply f deps-res))
               [:error error] [:error res {:f-name f-name :error error}]
               [:ok data] (recur (assoc res f-name data) (rest fns)))))))
