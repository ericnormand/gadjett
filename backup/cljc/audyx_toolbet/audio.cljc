(ns audyx-toolbet.audio
  #?(:clj (:import [java.Math])))

(defn log[x]
  #?(:cljs (.log js/Math x)
     :clj (Math/log x)))

(defn pow[a b]
  #?(:cljs (.pow js/Math a b)
     :clj (Math/pow a b)))

(defn sqrt [x]
  (pow x 0.5))

(def log10-const
  #?(:cljs (.-LN10 js/Math)
     :clj (log 10)))

(defn log10 [x]
  (/ (log x) log10-const))

(defn db-to-gain[db]
    (pow 10 (/ db 20)))

(defn gain-to-db[gain]
  (* 20 (log10 gain)))

(defn to-sec [x] (/ x 1000))
(defn to-msec [x] (* x 1000))

(defn volume-splitted [volume num-of-speakers]
  (- volume (* 20 (log10 (sqrt num-of-speakers)))))

(defn fft-frequencies[sampling-rate fftSize]
  (range 0 (/ sampling-rate 2) (/ sampling-rate fftSize)))

(defn freq-min [sampling-rate fftSize]
  (/ sampling-rate fftSize))

(defn dbspl->dbfs [volume max-dbspl]
  (- volume max-dbspl))

(def dbhl-delta-map {
  250 11
  500 4
  750 2
  1000 2 
  1500 1 
  2000 -1 
  3000 -6
  4000 -6 
  6000 2 
  8000 11})

(defn dbhl->dbspl [dbhl hz]
  (if-let [delta (dbhl-delta-map hz)]
    (+ delta dbhl)
    (throw
      (#?(:clj Exception. :cljs js/Object. (str "invalid frequency value: " hz))))))

(defn dbspl->dbhl [dbspl hz]
  (if-let [delta (dbhl-delta-map hz)]
    (- dbspl delta)
    (throw
      (#? (:clj Exception. :cljs js/Object. (str "invalid frequency value: " hz))))))
