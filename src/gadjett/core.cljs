(ns gadjett.core)
 
(defonce history (atom {}))
(def max-function-calls 50)
(def timeslot-function-calls-msec 1000)

(defn- add-event-and-filter [timestamp-msec events]
  (->>
    (take-while #(> % (- timestamp-msec timeslot-function-calls-msec)) events)
    (cons timestamp-msec)))

(defn- add-event [history func-name timestamp-msec]
  (update history func-name (partial add-event-and-filter timestamp-msec)))

(defn record-function-call [func-name]
  (swap! history add-event func-name (.valueOf (new js/Date)))
  (<= (count (get @history func-name)) max-function-calls))

(defn- sort-history "returns the history sorted by number of function calls"
  [hist]
  (->> hist
      (sort-by (comp count second))
      reverse))

(defn the-history "returns the history as an array, sorted by number of function calls"
  ([k] (get @history k))
  ([] (sort-history @history)))

(defn function-call-err-msg [func-name]
  (str func-name " was called too much: " max-function-calls " times over the last " timeslot-function-calls-msec " msec."))

