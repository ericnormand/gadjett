(defproject viebel/gadjett "0.1.8"
  :description "Inspector tools for clojurescript"
  :url "https://github.com/viebel/gadjett"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [figwheel-sidecar "0.5.0" :scope "test"]]
  
  :plugins [[lein-cljsbuild "1.1.2"]]
  :source-paths ["src"]
  :cljsbuild {
              :builds
              {
               :dev {
                :source-paths ["src"]
                :compiler {
                           :output-to "resources/main.js"
                           :optimizations :simple
                           :pretty-print true}}}})
