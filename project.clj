(defproject viebel/gadjett "0.2.1"
  :description "Inspector tools for clojurescript"
  :url "https://github.com/viebel/gadjett"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.93"]
                 [org.clojure/test.check "0.9.0"]
                 [com.velisco/herbert "0.7.0"]
                 [figwheel-sidecar "0.5.4-7"]
                 [midje "1.8.3"]]
  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6"]
            [lein-codox "0.9.6"]
            [lein-midje "3.2"]]
  :figwheel {:server-port 2512}
  :source-paths ["src" "script"]
  :codox {
          :metadata {:doc/format :markdown}
          :output-path "docs"
          :html {:transforms
                 [[:body]
                  [:prepend
                   [:div {:style "visibility: hidden;"}
                    [:div {:class "klipse"
                           :data-external-libs "https://raw.githubusercontent.com/viebel/gadjett/master/src/"}
                     "(ns test.gadjett
                     (:require [gadjett.collections :refer [unflatten-keys sequence->map =without-keys? dissoc-in intersection-point-func linear-equation mapify submap? intersection-point find-below-and-above-y linear-equation-func positions replace-keys filter-map vec->map assoc-cyclic highest-below-x linear-y linear-x-func recursive-vals subsequence edn-zip log-x-intersection-point interpolate-linear-y linear-y-func intersection-point-from-2-lines-points fix-blank-lines map-to-object deep-merge mean split-by-predicate-opt map-object-kv flatten-keys flatten-keys* map-to-object-with-index compactize-map lowest-above-x partition-between take-from-map sort-keys-by min-coll map-with-index map-object-with-key deep-merge* find-keys-with-value display-sequence range-till-end nearest-of-seq log-x-linear-y lowest-above-y branches-and-leaves remove-blank-lines select-vals log-x-linear-equation filter-branches calc-interpolated-values select-keys-in-order out-of-bound? map-2d-vec split-by-predicate seqify abs append-cyclic select-vals-in-order linear-x interpolate-linear-x map-2d-vec-kv max-and-min below-and-above-y highest-below-y index-of find-keys-with-values-in nearest-of-ss map-reverse-hierarchy map-object my-replace]]))"]]]
                  [:body]
                  [:append
                   [:link
                    {:rel "stylesheet"
                     :type "text/css"
                     :href "https://storage.googleapis.com/app.klipse.tech/css/codemirror.css"}]
                   [:script "window.klipse_settings = {selector: '.klipse'};"]
                   [:script {:src "https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js"}]]]}}
  :cljsbuild {
              :builds
              {
               :figwheel {
                          :figwheel true
                          :source-paths ["src"]
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
