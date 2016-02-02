(ns gadjett.core
  (:require 
    [cljs.core.async :refer [chan]]
    [gadjett.collections :as collections]))
 
(defonce history (atom {}))
(defonce settings {
                   :max-function-calls 50; max number of function calls of the same function in a timeslot defined by :timeslot-function-calls-msec
                   :max-function-calls-with-args 10; max number of function calls of the same function with the same arguments, in a timeslot defined by :timeslot-function-calls-msec
                   :timeslot-function-calls-msec 1000; timeslot for max function calls
                   :compact-max-elements-in-seq 5; max number of elements when an sequence is compacted
                   :compact-max-chars-in-str 10; max number of characters when a string is compacted
                   })

(defn settings! [& {:keys [] :as args}]
  (set! settings (merge settings args)))

(defonce chan-type (type (chan)))

(defn compact [x & {:keys [max-elements-in-seq max-chars-in-str] :as args :or {max-elements-in-seq (:compact-max-elements-in-seq settings) max-chars-in-str (:compact-max-chars-in-str settings)}}]
    (cond
          (= x true) x
          (= x false) x
          (nil? x) x
          (keyword? x) x
          (number? x) x
          (string? x) (subs x 0 max-chars-in-str)
          (map? x) (collections/take-from-map max-elements-in-seq (collections/map-object #(compact % args) x))
          (seqable? x) (take max-elements-in-seq (map #(compact % args) x))
          (array? x) (str "***[" (type x) "]***")
          (= chan-type (type x)) "channel"
          (= js/Function (type x)) "lambda()"
          (instance? js/Object x) (str "***[" (type x) "]***")
          :else (str "***[" (type x) "]***")))

(defn- add-event-and-filter [timestamp-msec events]
  (let [timeslot (:timeslot-function-calls-msec settings)]
    (->>
      (take-while #(> % (- timestamp-msec timeslot)) events)
      (cons timestamp-msec))))

(defn- add-event [history func-name timestamp-msec]
  (update history func-name (partial add-event-and-filter timestamp-msec)))

(defn func-and-args [func-name args]
  [func-name (compact args)])

(defn record-function-call [func-name args]
  (let [func-and-args (func-and-args func-name args)]
    (swap! history add-event func-name (.valueOf (new js/Date)))
    (swap! history add-event func-and-args (.valueOf (new js/Date)))
    (and (<= (count (get @history func-name)) (:max-function-calls settings))
         (<= (count (get @history func-and-args)) (:max-function-calls-with-args settings)))))

(defn- sort-history "returns the history sorted by number of function calls"
  [hist]
  (->> hist
      (sort-by (comp count second))
      reverse))

(defn the-history "returns the history as an array, sorted by number of function calls"
  ([k] (get @history k))
  ([] (sort-history @history)))

(defn str-history-key "returns a string with the key and the number of function calls that exceeded the max."
  [func-name args]
  (cond
    (> (count (get @history (func-and-args func-name args))) (:max-function-calls-with-args settings))
      (str (:max-function-calls-with-args settings) " times with this arguments: " (compact args) ".")
    (> (count (get @history func-name)) (:max-function-calls settings))
      (str (:max-function-calls settings) " times with different arguments.")
    :else "no idea why we got there; probably a bug => write to viebel@gmail.com"))

(defn function-call-err-msg [func-name args]
  (str func-name " was called too much over the last " (:timeslot-function-calls-msec settings)" msec: "
       (str-history-key func-name args)))
