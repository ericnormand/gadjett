(ns gadjett.core)
 
(defonce history (atom {}))
(def max-function-calls 50)
(def max-function-calls-with-args 10)
(def timeslot-function-calls-msec 1000)

(defn- add-event-and-filter [timestamp-msec events]
  (->>
    (take-while #(> % (- timestamp-msec timeslot-function-calls-msec)) events)
    (cons timestamp-msec)))

(defn- add-event [history func-name timestamp-msec]
  (update history func-name (partial add-event-and-filter timestamp-msec)))

(defn func-and-args [func-name args]
  [func-name (vals (js->clj args))])

(defn record-function-call [func-name args]
  (let [func-and-args (func-and-args func-name args)]
    (swap! history add-event func-name (.valueOf (new js/Date)))
    (swap! history add-event func-and-args (.valueOf (new js/Date)))
    (and (<= (count (get @history func-name)) max-function-calls)
         (<= (count (get @history func-and-args)) max-function-calls-with-args))))

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
    (> (count (get @history (func-and-args func-name args))) max-function-calls-with-args)
      (str max-function-calls-with-args " times with this arguments: " (vals (js->clj args)) ".")
    (> (count (get @history func-name)) max-function-calls)
      (str max-function-calls " times with different arguments.")
    :else "no idea why we got there; probably a bug => write to viebel@gmail.com"))

(defn function-call-err-msg [func-name args]
  (str func-name " was called too much over the last " timeslot-function-calls-msec " msec: "
       (str-history-key func-name args)))
