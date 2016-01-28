(ns gadjett.test
  (:require [gadjett.core :as g :refer-macros [deftrack breakpoint dbg]]))

(deftrack foo [x] x)
(deftrack foo-multi
  ([] 198)
  ([x] (* x x)))

(defn give-me-a-break [x]
  (breakpoint)
  (* x x))

(defn test-dbg []
  (dbg (map inc [1 2 3])))
