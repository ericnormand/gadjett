(ns gadjett.macros)


(defn symbol-several
  "returns a symbol with the concatenation of the str values of the args"
  [& x]
  (symbol (apply str x)))

(defmacro disp [& forms]
  (cons
    `symbol-several
    (for [form forms]
      `(str '~form " => " ~form "\n"))))
    
