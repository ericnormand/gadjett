(ns audyx-toolbet.numbers
  #?(:cljs (:require [goog.string.format])))

#?(:cljs
    (defn format
      "Formats a string using goog.string.format."
      [fmt & args]
      (apply goog.string/format fmt args)))

(defn round
  "Round a number to the given precision (number of significant digits)"
  [precision d]
  (let [factor (Math/pow 10 precision)]
    (/ (Math/round (* d factor)) factor)))

(defn factors 
  "Returns a sequence of all the divisors of `x` 
  ordered from the smallest to the greatest not including `x` and not including `1`."
  [x]
  (loop [xf [] i 2]
    (if (> (* i i) x)
      (vec (sort (distinct xf)))
      (if (zero? (rem x i))
        (recur (conj xf i (/ x i)) (inc i))
        (recur xf (inc i))))))


(defn greatest-factor [x]
  (or (last (factors x)) 1))

(defn subsequent-factors 
  "Returns a sequence of the subsequent divisors of `x` 
  including the greatest divisor of `x`
  ordered from the smallest to the greatest not including `x` but including `1`.
  All the numbers in the sequence are divisors of the subsequent numbers in the sequence"
  [x]
  (loop [n x
         res []]
    (let [next-res (cons n res)]
      (if (<= n 1)
        next-res
        (recur (greatest-factor n) next-res)))))

(defn format-decimal [n decimals]
  (if (integer? n)
    (str n)
    (format (str "%." decimals "f") n)))
