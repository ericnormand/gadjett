# gadjett

Here are a set of tools that leverage clojure macro power to make your `clj[s]` coding experience more effective.

## deftrack
This macro will proactively solves (part of) your performance issues, by ensuring that no function is called too often.
Use `deftrack` instead of `defn` and you will get an exception if the function is called more that 100 times per second.

**Bonus**: No performance hit in production => the code added by `deftrack` disappears when you use `:elide-asserts true`.

## deftry

## dbg
