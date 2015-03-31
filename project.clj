(defproject threading-macros.info "0.1.0"

  :description "Clojure threading macro animations"
  :url "https://github.com/oakmac/threading-macros.info"
  :license {
    :name "MIT License"
    :url "https://github.com/oakmac/threading-macros.info/blob/master/LICENSE.md"
    :distribution :repo }

  :dependencies [
    [org.clojure/clojure "1.6.0"]
    [org.clojure/clojurescript "0.0-3126"]
    ;; [hiccups "0.3.0"]
    ]

  :plugins [[lein-cljsbuild "1.0.5"]]

  :source-paths ["src"]

  :clean-targets [
    "out"
    "public/js/main.js"
    "public/js/main.min.js"]

  :cljsbuild {
    :builds {

      :client {
        :source-paths ["src-cljs"]
        :compiler {
          :output-to "public/js/main.js"
          :optimizations :whitespace }}

      :client-adv {
        :source-paths ["src-cljs"]
        :compiler {
          :output-to "public/js/main.min.js"
          :optimizations :advanced
          :pretty-print false }}
}})
