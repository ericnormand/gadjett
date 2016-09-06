(ns gadjett.test
  (:require-macros
    [gadjett.core :as g :refer [log-with-msg deflog deftrack breakpoint dbg defprint]])
  (:require
    [gadjett.collections :as collections]
    gadjett.core-fn))

(deflog hoora [x] (log (* x x)))
(defprint footprint [x] (* x x))
(defprint blue-print [& args] (first args))
(deftrack foo [x] x)
(deftrack noop [x]) 
(deftrack foo-multi
  ([] 198)
  ([x] (* x x)))

(defn give-me-a-break [x]
  (breakpoint)
  (* x x))

(defn test-dbg []
  (dbg (map inc [1 2 3])))


(+ 1 2)
