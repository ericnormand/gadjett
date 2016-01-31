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

(defmacro deftrack [& definition]
  (let [full-name (str (:name (cljs.analyzer/resolve-var &env (first definition))))]
    (if (vector? (second definition))
      (let [[func-name args & body] definition]
        `(defn ~func-name ~args
           (assert (record-function-call ~full-name (~'js* "arguments")) (function-call-err-msg ~full-name (~'js* "arguments")))
           ~@body))

      (let [[func-name & definitions] definition]
        `(defn ~func-name ~@(map
                              (fn [[args & body]]
                                `(~args
                                   (assert (record-function-call ~full-name (~'js* "arguments")) (function-call-err-msg ~full-name (~'js* "arguments")))
                                   ~@body))
                              definitions))))))
