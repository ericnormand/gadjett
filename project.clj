(defproject viebel/gadjett "0.2.1"
  :description "Inspector tools for clojurescript"
  :url "https://github.com/viebel/gadjett"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]
                 [org.clojure/test.check "0.9.0"]
                 [com.velisco/herbert "0.7.0"]
                 [figwheel-sidecar "0.5.6"]
                 [midje "1.8.3"]]
  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6"]
            [lein-codox "0.11.0"]
            [lein-midje "3.2"]]
  :figwheel {:server-port 2512}
  :source-paths ["src" "script" "try"]
  :codox {
          :language :clojurescript
          :metadata {:doc/format :markdown}
          :source-paths ["src"]
          :output-path "docs"
          :themes [:default :klipse]
          :html {:transforms
                 [[:body]
                  [:prepend
                   [:div {:style "visibility: hidden;"}
                    [:div {:class "klipse"
                           :data-external-libs "https://raw.githubusercontent.com/viebel/gadjett/master/src/"}
                     "(ns test.gadjett
                       (:require
                             [gadjett.linear :refer [intersection-point-func linear-equation intersection-point find-below-and-above-y linear-equation-func highest-below-x linear-y linear-x-func log-x-intersection-point interpolate-linear-y linear-y-func intersection-point-from-2-lines-points lowest-above-x find-keys-with-value log-x-linear-y lowest-above-y log-x-linear-equation calc-interpolated-values linear-x interpolate-linear-x below-and-above-y highest-below-y find-keys-with-values-in]]
                         [gadjett.collections :refer [compact unflatten-keys sequence->map =without-keys? dissoc-in split-by-predicate-positions mapify submap? positions filter-map vec->map assoc-cyclic infinity subsequence edn-zip fix-blank-lines map-to-object deep-merge mean map-object-kv flatten-keys flatten-keys* compactize-map partition-between take-from-map map-with-index map-object-with-key deep-merge* range-till-end nearest-of-seq branches-and-leaves remove-blank-lines filter-branches out-of-bound? map-2d-vec split-by-predicate seqify abs append-cyclic map-2d-vec-kv max-and-min index-of nearest-of-ss map-reverse-hierarchy map-object my-replace]]))"]]]]}}
  :cljsbuild {
              :builds
              {
               :figwheel {
                          :figwheel true
                          :source-paths ["src" "try"]
                          :compiler {:main "gadjett.test"
                                     :asset-path "js"
                                     :output-to "resources/public/js/main.js"
                                     :output-dir "resources/public/js"
                                     ;:elide-asserts true
                                     :verbose true}}
               :dev {
                :source-paths ["src"]
                :compiler {
                           :output-to "resources/main.js"
                           :optimizations :simple
                           :pretty-print true}}}})
