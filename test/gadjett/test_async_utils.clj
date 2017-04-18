(ns gadjett.test-async-utils
  (:require [gadjett.async-utils :refer :all]
            [clojure.test :refer :all]
            [midje.sweet :refer :all]
            [clojure.core.async :refer [<!! go]]))

(defn async-square [x]
  (go
    (* x x)))

(comment (go-map async-square [1]))

(facts "go-map"
       (tabular (fact ""
                      (<!! (go-map async-square ?in)) => ?out)
                ?in    ?out
                []     []
                [1 2]  [1 4]))

