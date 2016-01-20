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

(defn the-history
  ([k] (clj->js [(count (get @history k)) (get @history k)]))
  ([] (clj->js @history)))

 

