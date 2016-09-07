(ns gadjett.check-collections
  (:use [gadjett.collections])
  (:require [miner.herbert.generators :as hg]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]))



(defspec check-max-and-min 100
  (hg/property (fn [v] 
                 (let [[the-max the-min] (max-and-min v)]
                   (and
                     (= the-min (apply min v))
                     (= the-max (apply max v)))))
               '[int+]))

(defspec check-take-from-map 100
  (prop/for-all [m (gen/recursive-gen
                     (fn [inner] (gen/such-that not-empty (gen/map gen/int inner)))
                     gen/int)#_(gen/recursive-gen (partial gen/map gen/int) gen/boolean)
                 n gen/pos-int]
                (let [size-of-m (count (flatten-keys m))
                      expected-size (min n size-of-m)]
                  (= expected-size (count (flatten-keys (take-from-map n m)))))))

(defspec check-flatten-keys 100
  (prop/for-all [mmm (gen/such-that not-empty (gen/map gen/keyword gen/int))]
                (let [m {:a mmm}
                      res (flatten-keys m)]
                    (every? true? (map #(= (get res %) (get-in m %)) (keys res))))))

(defspec check-append-cyclic 100
  (hg/property (fn [v x]
                 (let [res (append-cyclic v x)]
                   (and (= (count res) (count v))
                        (= x (last res))
                        (= (first res) (second v))
                        (= (drop-last 1 res) (rest v)))))
               '[int+ 2] 'int))


(defn dist [a b]
  (abs (- a b)))

(defn distances [coll x]
  (map #(dist x %) coll))

(defn min-dist [coll x]
  (if (empty? coll) 0
    (apply min (distances coll x))))

(defspec check-nearest-of-seq 30
  (prop/for-all [a (gen/vector gen/int)
                 b (gen/vector gen/int)]
                (let [res (nearest-of-seq a b)]
                  (= (map #(min-dist a %) b)
                     (map dist res b)))))
;;;

#(defspec check-unflatten-keys 100
  (prop/for-all [m (gen/map (gen/such-that not-empty (gen/vector gen/int)) gen/int)]
    (= m (flatten-keys (unflatten-keys m)))))

(defspec check-flatten-keys 100
  (prop/for-all [m (gen/recursive-gen 
                      (fn [inner] (gen/such-that not-empty (gen/map gen/int inner)))
                      gen/int)]
    (= m (unflatten-keys (flatten-keys m)))))

(defspec check-out-of-bounds 100
  (prop/for-all [v (gen/vector gen/int)
                 i gen/int]
    (= (out-of-bound? v i) (not (get v i)))))

(defspec check-filter-map-nil 100
  (prop/for-all [m (gen/map gen/keyword gen/int)]
    (= (filter-map (comp not nil?) m) (compactize-map m))))
