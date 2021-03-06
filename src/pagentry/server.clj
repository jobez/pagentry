(ns pagentry.server
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [pagentry.views.complector :as views]
            [ring.util.response :refer [file-response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [clojure.core.async :refer [chan <! >! put! close! go-loop go]]
            [org.httpkit.server :as http-kit]
            [ring.middleware.reload :as reload]
            [ring.util.response :as resp]))

(defroutes pagentryroutes
  (GET "/" [] (resp/response (views/pagentry)))
  (route/resources "/" {:root "public"}))


(def app (-> pagentryroutes wrap-edn-params reload/wrap-reload))


(defn -main
  ([port]
    (let [Port (Integer/parseInt port)]
      (println "server running w/ port" port)
      (http-kit/run-server app {:port Port})))
  ([]
   (let [strPort (System/getenv "PORT")
         Port (Integer/parseInt strPort)]
     (println "we're running on:" strPort)
     (http-kit/run-server app {:port Port}))))
