(ns gadjett.jipper
  (:require [clojure.zip :as zip]))


(defn- loc-replace-and-insert [match replacement values loc]
  (if (= (zip/node loc) match)
    (as-> loc $
      (zip/replace $ replacement)
      #_(zip/insert-right $ (first values))
      (reduce (fn [agg v] (zip/insert-right agg v)) $ (reverse values)))
    loc))

(defn replace-and-insert
  "Recursively transforms `form` by replacing keys in smap with their values."
  [match replacement values form]
  (loop [loc (zip/seq-zip form)]
    (if (zip/end? loc)
      (zip/root loc)
      (recur (zip/next (loc-replace-and-insert match replacement values loc))))))
