(ns gadjett.macros)

(defmacro disp [& forms]
  (cons `str (for [form forms]
               `(str (pr-str '~form) " => " (pr-str ~form) "\n"))))
