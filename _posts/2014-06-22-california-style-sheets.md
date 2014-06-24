---
layout: post
title: "California Style Sheets"
date: 2014-06-22 13:00:00
---

In addition to supporting regular HTML content, GitHub Pages support Jekyll, a simple, blog-aware static site generator. Jekyll makes it easy to create site-wide headers and footers without having to copy them across every page. It also offers some other advanced templating features.

![CA](/static/assets/ca.jpg)

Every GitHub Page is run through Jekyll when you push content to a specially named branch within your repository. For User Pages, use the master branch in your username.github.io repository. For Project Pages, use the gh-pages branch in your project's repository. Because a normal HTML site is also a valid Jekyll site, you don't have to do anything special to keep your standard HTML files unchanged. Jekyll has thorough documentation that covers its features and usage. Simply start committing Jekyll formatted files and you'll be using Jekyll in no time.

{% highlight clojure %}
(ns counter.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:count 42}))

(defn dec-button [counter owner]
  (reify
    om/IRender
    (render [this]
      (dom/button #js {:onClick (fn [e] (om/transact! counter :count dec))}
                  "dec"))))

(defn inc-button [counter owner]
  (reify
    om/IRender
    (render [this]
      (dom/button #js {:onClick (fn [e] (om/transact! counter :count inc))}
                  "inc"))))

(defn counter [app owner]
  (reify
    om/IRender
    (render [this]
      (let [count (:count app)]
        (dom/div nil
                 (dom/h1 nil count)
                 (om/build dec-button app)
                 (om/build inc-button app))))))

(om/root
  counter
  app-state
  {:target (. js/document (getElementById "app"))})
{% endhighlight %}

{% highlight clojure %}
(ns om-tut.core
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [clojure.data :as data]
              [clojure.string :as string]))

(def app-state
    (atom
        {:contacts
         [{:first "Phen" :last "Bitdiddle" :email "benb@mit.edu"}
          {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
          {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
          {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
          {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
          {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(defn parse-contact [contact-str]
    (let [[first middle last :as parts] (string/split contact-str #"\s+")
          [first last middle] (if (nil? last)
                                  [first middle]
                                  [first last middle])
          middle (when middle (string/replace middle "." ""))
          c (if middle (count middle) 0)]
        (when (>= (count parts) 2)
            (cond-> {:first first :last last}
                (== c 1) (assoc :middle-initial middle)
                (>= c 2) (assoc :middle middle)))))

(defn middle-name [{:keys [middle middle-initial]}]
    (cond
        middle (str " " middle)
        middle-initial (str " " middle-initial ".")))

(defn display-name [{:keys [first last] :as contact}]
    (str last ", " first (middle-name contact)))

(defn contact-view [contact owner]
    (reify
        om/IRenderState
        (render-state [this {:keys [delete]}]
            (dom/li nil
                (dom/span nil (display-name contact))
                (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Delete")))))

(defn add-contact [app owner]
    (let [input (om/get-node owner "new-contact")
          new-contact (-> input .-value parse-contact)]
        (when new-contact
            (om/transact! app :contacts
                #(conj % new-contact))
            (om/set-state! owner :text ""))))

(defn handle-change [e owner {:keys [text]}]
    (let [value (.. e -target -value)]
        (if-not (re-find #"\d" value)
            (om/set-state! owner :text value)
            (om/set-state! owner :text text))))

(defn contacts-view [app owner]
    (reify
        om/IInitState
        (init-state [_]
            {:delete (chan)
             :text ""})
        om/IWillMount
        (will-mount [_]
            (let [delete (om/get-state owner :delete)]
                (go-loop []
                    (let [contact (<! delete)]
                        (om/transact! app :contacts
                            (fn [xs] (vec (remove #(= contact %) xs))))
                        (recur)))))
        om/IRenderState
        (render-state [this state]
            (dom/div nil
                (dom/h2 nil "Contacts List")
                (apply dom/ul nil
                    (om/build-all contact-view (:contacts app)
                        {:init-state state}))
                (dom/div nil
                    (dom/input #js {:type "text" :ref "new-contact" :value (:text state)
                                    :onChange #(handle-change % owner state)})
                    (dom/button #js {:onClick #(add-contact app owner)} "Add Contact"))))))

(om/root contacts-view app-state
    {:target (. js/document (getElementById "om"))})
{% endhighlight %}
