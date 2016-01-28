(ns gadjett.core
  (:require [cljs.analyzer]))

(defmacro dbg[x]
  `(let [x# ~x]
     (print (str '~x ": " x#))
     x#))

(defmacro breakpoint []
  '(do (js* "debugger;")
       nil)) ; (prevent "return debugger;" in compiled javascript)

(defmacro deftrack [& definition]
  (if (vector? (second definition))
    (let [[func-name args & body] definition]
      `(let [full-name#  ~(str (:name (cljs.analyzer/resolve-var &env func-name)))]
         (defn ~func-name ~args
           (assert (record-function-call full-name#) (function-call-err-msg full-name#))
           ~@body)))

    (let [[func-name & definitions] definition]
      `(let [full-name#  ~(str (:name (cljs.analyzer/resolve-var &env func-name)))]
         (defn ~func-name ~@(map
                              (fn [[args & body]]
                                `(~args
                                   (assert (record-function-call full-name#) (function-call-err-msg full-name#))
                                   ~@body))
                              definitions))))))
