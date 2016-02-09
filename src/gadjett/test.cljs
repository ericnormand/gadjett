(ns gadjett.test
  (:require [gadjett.jipper :as jipper]
            [gadjett.core :as g :refer-macros [deftrack breakpoint dbg defprint]]))

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
