(ns gadjett.test
  (:require [gadjett.core :as g :refer-macros [deftrack breakpoint dbg]]))

(deftrack foo [x] x)
(deftrack bar [x] (* x x))

(defn give-me-a-break [x]
  (breakpoint)
  (* x x))

(dbg (map inc [1 2 3]))
