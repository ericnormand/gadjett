(ns gadjett.spec-test-utils
  (:require [clojure.pprint :as pprint]
            [clojure.spec :as s]
            [clojure.test :refer [is]]
            [clojure.spec.test :as stest]))


(defn summarize-results' [spec-check]
  (map (comp #(pprint/write % :stream nil) stest/abbrev-result) spec-check))

(defn check' [spec-check]
  (is (nil? (-> spec-check first :failure))
      (summarize-results' spec-check)))

