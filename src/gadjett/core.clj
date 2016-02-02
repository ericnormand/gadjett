(ns gadjett.core
  (:require [cljs.analyzer]))

(defmacro dbg[x]
  (when *assert*
  `(let [x# ~x]
     (print (str '~x ": " x#))
     x#)))

(defmacro breakpoint []
  '(do (js* "debugger;")
       nil)) ; (prevent "return debugger;" in compiled javascript)

(defmacro defprint "thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE" [func-name args & body]
  `(defn ~func-name [~'& args#]
     (println "args: " args#)
     (let [~args args#]
       ~@body)))

(defmacro deftrack [& definition]
  (let [full-name (str (:name (cljs.analyzer/resolve-var &env (first definition))))]
    (if (vector? (second definition))
      (let [[func-name args & body] definition]
        `(defn ~func-name [~'& args#]
           (assert (record-function-call ~full-name args#) (function-call-err-msg ~full-name args#))
           (let [~args args#]
             ~@body)))

      (let [[func-name & definitions] definition]
        `(defn ~func-name ~@(map
                              (fn [[args & body]]
                                `(~args
                                   (assert false "deftrack macro doesn't handle (yet) multi-arity functions")
                                   ~@body))
                              definitions))))))
