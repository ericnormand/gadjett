(ns gadjett.test-linear
  (:use [midje.sweet]
        [gadjett.linear]))

(defn set= [a b]
  (= (set a) (set b)))

(facts "Linear (1)"
       (tabular
         (fact "linear-y" (linear-y ?v ?x1 ?y1 ?x2 ?y2) => ?res)
         ?v ?x1 ?y1 ?x2 ?y2 ?res
         3 2 4 4 8 6
         80 75 10 85 70 40
         )
       (tabular
         (fact "interpolate-linear-y" (interpolate-linear-y ?coll ?v) => ?res)
         ?coll ?v ?res
         {2 4 4 8} 3 6
         {2 4 4 8} 6 nil
         {75 10 85 70} 80 40
         )
       (tabular
         (fact "interpolate-linear-y" (interpolate-linear-y ?coll ?v :interpolate? ?pred) => ?res)
         ?coll ?v ?pred ?res
         {2 4 4 8} 3 (fn [below above] (= (* 2 below) above)) 6
         {2 4 4 8} 6 (fn [below above] (= (* 2 below) above)) nil
         {75 10 85 70} 80 (fn [below above] (= (* 2 below) above)) nil
         )
       (tabular
         (fact "linear-equation" (linear-equation ?x1 ?y1 ?x2 ?y2) => ?res)
         ?x1 ?y1 ?x2 ?y2 ?res
         2 4 1 2 [2 0]
         0 4 4 0 [-1 4])
       (tabular
         (fact "intersection-point" (intersection-point ?a1 ?b1 ?a2 ?b2) => ?res)
         ?a1 ?b1 ?a2 ?b2 ?res
         2 0 -1 4 [(/ 4 3) (/ 8 3)]))

(facts "Linear (2)"
       (tabular
         (fact "interpolate-linear-x"
               (interpolate-linear-x ?m 50) => ?res)
         ?m ?res
         {10 50} 10
         {10 40} nil
         {10 50 20 50} 10
         {10 20 20 40} nil
         {10 30 20 70 30 50 50 50} 15
         {10 50 20 50 30 20 50 70} 10
         {10 12 40 30 70 80} 52
         {10 12 40 30 60 80 70 80} 48
         {10 12 40 30 50 30 60 80 70 80} 54
         {10 12 40 20 70 80} 55
         {10 40 20 20 30 80} 25
         )
       (fact "highest-below-y"
             (highest-below-y {:a 40 :b 60 :c 90} 20) => nil
             (highest-below-y {:aa 10 :b 20 :c 30} 20) => [[:b 20]]
             (highest-below-y {:aa 10 :b 20 :dd 20 :c 30} 20) => (partial set= [[:dd 20] [:b 20]])
             (highest-below-y {:aa 10 :b 20 :dd 20 :c 30} 25) => (partial set= [[:dd 20] [:b 20]])
             (highest-below-y {:a 10 :b 20 :c 30} 19) => [[:a 10]])
       (fact "lowest-above-y"
             (lowest-above-y {:a 10 :b 20 :c 30} 100) => nil
             (lowest-above-y {:a 10 :b 20 :c 30} 20) => [[:b 20]]
             (lowest-above-y {:a 10 :b 20 :dd 20 :c 30} 19) => (partial set= [[:dd 20] [:b 20]])
             (lowest-above-y {:a 10 :b 20 :dd 20 :c 30} 20) => (partial set= [[:dd 20] [:b 20]])
             (lowest-above-y {:a 10 :b 20 :c 30} 19) => [[:b 20]]))
