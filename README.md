# gadjett [![Build Status](https://travis-ci.org/viebel/gadjett.svg?branch=master)](https://travis-ci.org/viebel/gadjett)

Here are a set of tools that leverage clojure macro power to make your `cljs` coding experience more effective.

## Usage
Add this to your `project.clj` dependencies:

[![Clojars Project](https://img.shields.io/clojars/v/viebel/gadjett.svg)](https://clojars.org/viebel/gadjett)

## Live Documentation

[Live and Interactive documentation](http://viebel.github.io/gadjett/index.html)

## API
In order to use the `gadjett` macros, you have to include the `gadjett` namespace like this:

```clojure
(ns user
  (:require-macros [gadjett.core :only [deftrack]]))
```

### settings

`Gadjett` comes with a couple of default settings:
```clojure
 {
   :max-function-calls 50; max number of function calls of the same function in a timeslot defined by :timeslot-function-calls-msec
   :max-function-calls-with-args 10; max number of function calls of the same function with the same arguments, in a timeslot defined by :timeslot-function-calls-msec
   :timeslot-function-calls-msec 1000; timeslot for max function calls
   :compact-max-elements-in-seq 5; max number of elements when an sequence is compacted
   :compact-max-chars-in-str 10; max number of characters when a string is compacted
}
```

You can override the default settings, using `gadjett.core-fn.settings!`:

```clojure
(gadjett.core-fn/settings! :max-function-calls 17)
```
### deftrack
This macro will proactively solves (part of) your performance issues, by ensuring that no function is called too often.
Use `deftrack` instead of `defn` and you will get an exception if the function is called more that 50 (configurable number) times per second.

```clojure
  (deftrack foo [])
  (dotimes [i 51] (foo)); it throws a js error
```

And it works also for multi-arity functions


```clojure
  (deftrack foo-multi
    ([] 17)
    ([x] x))
  (dotimes [i 101] (foo)); it throws a js error
```

**Bonus**: No performance hit in production => the code added by `deftrack` disappears when you use `:elide-asserts true`.

### deftry

### dbg
This macro prints in the browser console an expression and its evaluation + it returns the evaluation. 
You can wrap any s-expression into `dbg` and the code will behave the same.

```clojure
(let [x (dbg (map inc [1 2 3]))
     (count x)]) ; will return 3 + print in the console: "(map inc [1 2 3]): (2 3 4)"
```

**Bonus**: No negative impact in production => the code added by `dbg` disappears when you use `:elide-asserts true`.
### breakpoint
This macro inserts a breakpoint. 

```clojure
(defn give-me-a-break [x]
  (breakpoint)
  (* x x))
```

## Try Gadjett

Make sure `rlwrap` is installed.
```bash
mkdir -p resources/public/js
rlwrap lein run -m clojure.main script/repl.clj
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

### Automatic tests
The testable parts of the code are written in a portable way. It's simpler to test in clojure than in cljs.

```bash
lein repl
user=> (use 'midje.repl)
user=> (autotest)
```
