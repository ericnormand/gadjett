# gadjett

Here are a set of tools that leverage clojure macro power to make your `clj[s]` coding experience more effective.

## API
Add this to your `project.clj`:

[![Clojars Project](https://img.shields.io/clojars/v/viebel/gadjett.svg)](https://clojars.org/viebel/gadjett)

In order to use the `gadjett` macros, you have to include the `gadjett` namespace like this:

```clojure
(ns user
  (:use-macros [gadjett.core :only [deftrack]])
  (:require [gadjett.core :as g :include-macros true]))
```

The reason that you need the two statements is because `deftrack` macro - defined in `core.clj` - calls functions - defined in `core.cljs`.

### deftrack
This macro will proactively solves (part of) your performance issues, by ensuring that no function is called too often.
Use `deftrack` instead of `defn` and you will get an exception if the function is called more that 100 times per second.

```clojure
  (deftrack foo [])
  (dotimes [i 101] (foo))
```

**Bonus**: No performance hit in production => the code added by `deftrack` disappears when you use `:elide-asserts true`.

### deftry

### dbg
This macro displays an expression and its evaluation + it returns the evaluation. 

```clojure
(dbg (map inc [1 2 3]))
```

### breakpoint
This macro inserts a breakpoint. 

```clojure
(defn give-me-a-break [x]
  (breakpoint)
  (* x x))
```

## Contribution

Make sure `rlwrap` is installed.
```bash
mkdir -p resources/public/js
rlwrap lein run -m clojure.main script/figwheel.clj
```
open your browser to http://localhost:2512 (you can configure the port, by editing `script/figwheel.clj`).

Now, you are inside a live reload REPL (Hourra Figwheel).
Give it a try!
```clojure
(in-ns 'gadjett.test)
(foo 5); 5 - Nothing special
(dotimes [i 50] (foo 5)); Assert failed: gadjett.test/foo was called too much: 50 times over the last 1000 msec.
(dotimes [i 25] (bar 5)); Assert failed: gadjett.test/foo was called too much: 50 times over the last 1000 msec.
(g/the-history); you get the history of all the function calls
```
