(ns audyx-toolbet.strings
  (:require  [clojure.string :as string]))


(def regex-char-esc-smap
  (let [esc-chars ".()*&^%$#!+?[]{}|\\"]
    (zipmap esc-chars
            (map #(str "\\" %) esc-chars))))
   
(defn escape-string
  [s]
  (->> s
       (replace regex-char-esc-smap)
       (reduce str)))

(defn string-begins? "returns true if string starts with prefix"
  [s prefix]
    (as-> prefix $
         (escape-string $)
         (re-pattern (str "^" $))
         (re-find $ s)
         (not (nil? $))))

(defn replace-all
  "Replace occurences of keys with their matching values"
  [s m]
  (reduce #(string/replace %1 (key %2) (val %2)) s m))

(def with-accents "áàçèéêёôù")
(def no-accents   "aaceeeeou")
(def accents-map (zipmap with-accents no-accents))

(defn remove-accents
  "remove french accents from string and replace them with regular letters"
  [s]
  (replace-all s accents-map))

(def escape-map {
  "." "\\."
  "\n" "\\n"
  "\r" "\\r"
  "\t" "\\t"
  "\b" "\\b"
  "\f" "\\f"
  "*" "\\*"
  "?" "\\?"
  "\\" "\\\\"
  "(" "\\("
  ")" "\\)"
  "[" "\\["
  "+" "\\+"
  "_" "\\_"
  "|" "\\|"
  })

(def accents ["[aáà]" "[eèéêёë]" "[cç]" "[oô]" "[uù]"])

(defn build-insensitive-pattern
  "receive a string 
   return a pattern 
   insensitive accent + insensitive case"
  [s]
  (as->
    (string/escape s escape-map) $
    (reduce #(string/replace %1 (re-pattern %2) %2) $ accents)
    (str "(?i)^" $)
    (re-pattern $)))

(defn match-pattern? 
  "receive a pattern and an array of strings
   check if the pattern is a prefix of at least one string in the array"
  [ptrn arr]
  (some #(when % (re-find ptrn (str %))) arr))
