(ns gadjett.test-collections
  (:use [midje.sweet]
        [gadjett.collections]))

(defn set= [a b]
  (= (set a) (set b)))

(facts "Utils/Collections (1)"
       (fact "sequence->map"
             (sequence->map  [10 20 30]) => {0 10 1 20 2 30})
       (tabular
         (fact "partition-between" (partition-between ?pred ?coll) => ?res)
         ?pred ?coll ?res
         (fn [a b] (> (- b a) 2)) [1 4 5 8 9 10 15 20 21] [[1] [4 5] [8 9 10] [15] [20 21]]
         (fn [a b] (> a b)) [1 2 4 9 4 6 8 2] [[1 2 4 9] [4 6 8] [2]]
         )
       (tabular
         (fact "branches-and-leaves" (branches-and-leaves ?coll) => ?res)
         ?coll ?res
         {} {:branches [{}] :leaves []}
         [] {:branches [[]] :leaves []}
         [{:a 5} {:b 7}] {:branches [[{:a 5} {:b 7}] {:a 5} {:b 7}] :leaves [5 7]}
         {:a {:b 7}} {:branches [{:a {:b 7}} {:b 7}] :leaves [7]}
         )
       (tabular
         (fact "filter-branches" (filter-branches ?coll ?pred) => (partial set= ?res))
         ?coll ?pred ?res
         {} :a '()
         {:a {:b 7}} :c '()
         [{:a 5} {:b [7 6]}] :b '({:b [7 6]})
         {:a {:b 7} :c {:l 7}} :b '({:b 7})
         {:a {:b {:id 5} :c 9} :id 7 :j {:id 8}} :id '({:a {:b {:id 5} :c 9} :id 7 :j {:id 8}} {:id 8} {:id 5})
         )
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
         2 0 -1 4 [(/ 4 3) (/ 8 3)])
       (tabular
         (fact "submap?" (submap? ?m1 ?m2) => ?res)
         ?m1 ?m2 ?res
         {} {} true
         {} {:a1 1} true
         {:a 1} {:a 1} true
         {:a 1} {} false
         {:a 1} {:a 1 :b 2} true
         {:a 1} {:a 2 :b 1} false)
       (tabular
         (fact "mapify" (mapify ?s ?f) => ?res)
         ?s ?f ?res
         [] - {}
         [1 2 3] - {-1 1 -2 2 -3 3}
         [{}] :a {nil {}}
         [{:a 1} {:a 2}] :a {1 {:a 1} 2 {:a 2}}
         )
       (tabular
         (fact "filter-map" (filter-map ?f ?m) => ?res)
         ?f ?m ?res
         identity {:a 1 :b 2} {:a 1 :b 2}
         (comp not-empty str) {:a 1 :b nil :c ""} {:a 1}
         (comp not nil?) {:a 1 :b nil :c ""} {:a 1 :c ""})
       (tabular
         (fact "select-vals-in-order"
               (select-vals-in-order ?m ?ks) => ?res)
         ?m ?ks ?res
         {:a 1 :b 2} [:a :b] [1 2]
         {:a 1 :b 2} [:b :a] [2 1]
         {:b 2 :a 1} [:a :b] [1 2]
         {:b 2 :a 1} [:b :a] [2 1]
         {:b 1 :a 2} [:b :a] [1 2]
         {:b 1 :a 2} [:a :b] [2 1]
         {2 "B" 1 "A"} [1 2] ["A" "B"]
         {2 "B" 1 "A"} [2 1] ["B" "A"]
         )
       (tabular
         (fact "=without-keys?"
               (=without-keys? ?a ?b ?kl) => ?res)
         ?a ?b ?kl ?res
         {:a 1 :b 2} {:a 2 :b 2} [:b] false
         {:a 1 :b 2} {:a 1 :b 3} [:b] true
         {} {:b 3} [:b] true
         {:a 1 :b 2 :c 3} {:a 1 :b 4 :c 5} [:b :c] true
         )
       (tabular
         (fact "deep-merge" (deep-merge ?a ?b) => ?res)
         ?a ?b ?res
         {:a {:b {1 'a' 2 'b'}}} {:a {:b {1 'I'}}} {:a {:b {1 'I' 2 'b'}}}
         {:a {:b {1 'a'}}} {} {:a {:b {1 'a'}}}
         {:a {:b {1 'a'}}} nil {:a {:b {1 'a'}}}
         )
       (tabular
         (fact "unflatten-keys" (unflatten-keys ?m) => ?res)
         ?m ?f ?res
         {[:a :b :c] "1" [:d :e :f] true} {:a {:b {:c "1"}} :d {:e {:f true}}}
         )
       )

(facts "Utils/Collections (2)"
       (fact "select-vals"
             (select-vals {:a 1 :b 2 :c 3} [:a :b]) =>  (partial set= [1 2]))
       (tabular
         (fact "replace-keys"
               (replace-keys ?a ?b) => ?c)
         ?a ?b ?c
         {:a 2 :b 3} {:a :A } {:A 2 :b 3}
         {:a 2 :b 3} {:a :A :b :B} {:A 2 :B 3})
       (tabular
         (fact "find-keys-with-value"
               (find-keys-with-value ?m ?v) => (partial set= ?res))
         ?m ?v ?res
         {} 2 []
         {:a 1 :b 2} 5 []
         {:a 1 :b 2} 1 [:a]
         {:a 1 :b 2 :c 1} 1 [:a :c])
       (tabular
         (fact "find-keys-with-values-in"
               (find-keys-with-values-in ?m ?v) => (partial set= ?res))
         ?m ?v ?res
         {} #{} []
         {:a 1 :b 2} #{} []
         {:a 1 :b 2} #{1 2} [:a :b]
         {:a 1 :b 2} #{1} [:a]
         {:a 1 :b 2 :c 1} #{1 2} [:a :b :c]
         {:a 1 :b 2 :c 1} #{1} [:a :c])
       (tabular
         (fact "sort-keys-by"
               (sort-keys-by second ?m) => ?res)
         ?m ?res
         {:a 1 :d 3} [:a :d]
         {:a 10 :d 3} [:d :a])
       (tabular
         (fact "recursive-vals"
               (recursive-vals ?a) => (partial set= ?res))
         ?a ?res
         {:a "aaa" :b {:c "param" "d" "txt"}} ["aaa" "param" "txt"]
         )
       (tabular
         (fact "recursive-vals empty"
               (recursive-vals ?a) => ?res)
         ?a ?res
         nil nil
         {} nil
         )
       (tabular
         (fact "flatten-keys"
               (flatten-keys ?a) => ?res)
         ?a ?res
         {} {}
         {:a "aaa" :b {:c "param" "d" "txt"}} {[:a] "aaa" [:b :c] "param" [:b "d"] "txt"}
         )
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
       (tabular
         (fact "select-keys-in-order"
               (select-keys-in-order ?m ?keyseq) => ?res)
         ?m ?keyseq ?res
         {:a 1 :b 2} [:a] '(1)
         {:a 1 :b 2} [:a :b] '(1 2)
         {:a 1 :b 2} [:a :b :c] '(1 2 nil)
         {:a 1 :b 2} [] []
         {:a 1 :b 2} nil []
         )
       (fact "map-with-index"
             (map-with-index ["a" "b" "c"] :idx :val) =>  '({:idx 0, :val "a"} {:idx 1, :val "b"} {:idx 2, :val "c"}))
       (fact "map-to-object-with-index"
             (map-to-object-with-index #(do {:val %}) ["a" "b" "c"]) => {0 {:val "a"}, 1 {:val "b"}, 2 {:val "c"}})
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
             (lowest-above-y {:a 10 :b 20 :c 30} 19) => [[:b 20]])
       #_(fact "strings-to-keywords"
               (strings-to-keywords ":a :b :c") => [:a :b :c]
               (strings-to-keywords ":a :b     :c") => [:a :b :c])
       (fact "display-sequence"
             (display-sequence (range 100 10 -1) [90 80 70 60 50] 50 10) => [90 80 70 60 50]
             (display-sequence (range 100 10 -1) [90 80 70 60 50] 100 10) => [100 90 80 70 60]
             (display-sequence (range 100 10 -1) [90 80 70 60 50] 40 10) => [80 70 60 50 40])
       (tabular
         (fact "map-reverse-hierarchy"
               (map-reverse-hierarchy ?in) => ?out)
         ?in ?out
         {} {}
         ;{:a [1 2] :b [1 3]} {1 [:a :b] 2 [:a] 3 [:b]}
         {:L {10 100 20 0} :R {10 50 30 0}} {10 {:L 100 :R 50} 20 {:L 0} 30 {:R 0}}
         {:L {10 100 20 0} :R {10 50 30 0} :A {}} {10 {:L 100 :R 50} 20 {:L 0} 30 {:R 0}}
         {:L {10 100 20 0} :R {10 50 30 0} :A {10 99}} {10 {:A 99 :L 100 :R 50} 20 {:L 0} 30 {:R 0}}
         ;{:a [[1 0] [2 50]] :b [[1 10] [3 100]]} {1 {:a 0 :b 10} 2 {:a 50} 3 {:b 100}} 
         )
       (fact "map-object"
             (map-object #(* 100 %) {:a 1 :b 2 :c 3}) => {:a 100 :b 200 :c 300})
       (fact "map-object-with-key"
             (map-object-with-key #(+ %1 %2) {2 2 3 3 4 4}) => {2 4 3 6 4 8}
             (map-object-with-key #(str %1 %2) {:a 1 :b 2})=>{:a ":a1" :b ":b2"})
       (tabular
         (fact "mean" (mean ?a) => ?b)
         ?a ?b
         [1 2 3] 2
         [] 0
         )
       (fact "vec->map"
             (vec->map []) => {}
             (vec->map [[:a 1] [:b 3]]) => {:a 1 :b 3}
             )

       (fact "append-cyclic"
             (append-cyclic [1 2 3] 4) => [2 3 4])
       (tabular
         (fact "assoc-cyclic" (assoc-cyclic ?a ?b ?c) => ?d)
         ?a ?b ?c ?d
         {} :a 1  {}
         {:a 1} :a 2 {:a 2}
         {:b 1} :a 2 {:a 2}
         {:b 3 :a 2} :b 1 {:a 2 :b 1}
         {:a 2 :b 3} :b 1 {:a 2 :b 1}
         {:b 3 :a 2} :a 1 {:a 1 :b 3}
         {:a 2 :b 3} :a 1 {:a 1 :b 3})
       (tabular
         (fact "assoc-cyclic with n" (assoc-cyclic ?a ?b ?c 2) => ?d)
         ?a ?b ?c ?d
         {} :a 1  {:a 1}
         {:a 1} :a 2 {:a 2}
         {:b 1} :a 2 {:b 1 :a 2}
         {:a 2 :b 3} :a 1 {:a 1 :b 3})

       (fact "max-and-min"
             (max-and-min [1 2 3]) => [3 1]
             )
       (fact "map-to-object"
             (map-to-object #(+ 2 %) [1 2 3]) => {1 3 2 4 3 5}
             )
       (tabular
         (fact "nearest-of-ss" (nearest-of-ss (apply sorted-set ?set) ?elem) => ?res)
         ?set ?elem ?res
         [1 2 3] 1.2 1
         [1 2 3] 0.2 1
         [1 2 3] 9.2 3
         )

       (fact "nearest-of-seq"
             (nearest-of-seq [1 2 3] [1.2 0.2 9.2]) => [1 1 3])
       (tabular
         (fact "positions" (positions ?coll ?max) => ?res)
         ?coll ?max ?res
         '(10 20 10) 100 '((0 10) (10 30) (30 40))
         '(10 0 10) 100 '((0 10) (10 10) (10 20))
         '(0 20 10) 100 '((0 0) (0 20) (20 30))
         '(10 20 10) 35 '((0 10) (10 30) (30 35))
         '(30) 20 '((0 20)))
       (tabular
         (fact "split-by-predicate" (split-by-predicate ?coll (partial = 0) ?n) => (vec ?res))
         ?coll ?n ?res
         '(0 123 0 1 0 0 0 0 0 1 1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 199)  4 '((0 123 0 1) (0 0 0 0 0) (1 1) (0 0 0 0 0) (1 0 1) (0 0 0 0 0) (1 199))
         '(123 0 1 0 0 0 0 0 1 1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 199)  4 '((123 0 1) (0 0 0 0 0) (1 1) (0 0 0 0 0) (1 0 1) (0 0 0 0 0) (1 199))
         '(123 0 1 0 0 0 0 0 1 1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 199)  5 '((123 0 1) (0 0 0 0 0) (1 1) (0 0 0 0 0) (1 0 1) (0 0 0 0 0) (1 199)))
       (tabular
         (fact "split-by-predicate-opt with factor = 1" (split-by-predicate-opt ?coll (partial = 0) ?n 1) => ?res)
         ?coll ?n ?res
         '(0 123 0 1 0 0 0 0 0 1 1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 199)  4 '((0 4) (4 9) (9 11) (11 16) (16 19) (19 24) (24 26))
         '(123 0 1 0 0 0 0 0 1 1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 199)  4 '((0 3) (3 8) (8 10) (10 15) (15 18) (18 23) (23 25)))
       )
(facts "Collections (3)"
       (tabular
         (fact "my-replace"
               (my-replace ?smap ?form) => ?res)
         ?smap ?form ?res
         '{a (b c)} '() '()
         '{a (b)} '(xx) '(xx)
         '{a (b)} '(a) '(b)
         '{a (b c)} '(a) '(b c)
         '{a (b c)} '(a ()) '(b c ())
         '{a (b x) c (d e)} '(a kk c (c zz)) '(b x kk d e (d e zz))
         '{a (b)} '{a b} '{b b}
         '{aaa (AAA BB CC)} '(aaa aa bb (a aaa (bb aaa))) '(AAA BB CC aa bb (a AAA BB CC (bb AAA BB CC))))
       (tabular
         (fact "remove-blank-lines" 
               (remove-blank-lines ?in) => ?out)
         ?in ?out
         "" ""
         "  \n" ""
         "  \t\n" ""
         "   " ""
         "   \t  " ""
         "   \t   \naa\n  \nbb\n  " "aa\nbb")
       (tabular
         (fact "fix-blank-lines" 
               (fix-blank-lines ?in) => ?out)
         ?in ?out
         "" ""
         "  \n" ""
         "  \t\n" ""
         "   " ""
         "   \t  " ""
         "   \t   \naa\n  \nbb\n  " "aa\n  \nbb")
      
       (tabular
         (fact "seqify" (seqify ?in) => ?out)
         ?in ?out
         '() '()
         '(nil) '(nil)
         'aa '(aa)
         '(aa) '(aa)))
