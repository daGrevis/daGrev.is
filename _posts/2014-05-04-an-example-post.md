---
layout: post
title: "An Example Post"
date: 2014-05-04 16:45:00
categories: jekyll update
---

Hello and welcome to my blog! It's based on [Jekyll](http://jekyllrb.com) and
seems to be working fine.

Once I wrote Quicksort in Clojure; you should see it!

{% highlight clojure %}
(defn pivot-and-rest [coll]
  (let [splitted (split-at (quot (count coll) 2) coll)
        second-part (second splitted)]
    [(first second-part) (concat (first splitted) (rest second-part))]))

(defn quicksort [coll]
  (cond
    (empty? coll) []
    (= (count coll) 1) coll
    :else (let [[p xs] (pivot-and-rest coll)
                {lesser true greater false} (group-by #(< % p) xs)]
      (concat (quicksort lesser) [p] (quicksort greater)))
  ))

(assert (= (quicksort []) []))
(assert (= (quicksort [1]) [1]))
(assert (= (quicksort [2 1 3]) [1 2 3]))
(assert (= (quicksort [2 1 4 3]) [1 2 3 4]))
{% endhighlight %}

I'm thinking of [daGrev.is](https://dagrev.is) as domain name for this blog.
It's a top-level domain name for Iceland.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
fermentum lacus, eget consectetur turpis. Donec gravida ac odio quis vehicula.
Vivamus placerat diam a tempor rhoncus. Pellentesque habitant morbi tristique
senectus et netus et malesuada fames ac turpis egestas. Quisque rutrum dapibus
rutrum.

* IV: A New Hope
* V: The Empire Strikes Back
* VI: Return of the Jedi
* I: The Phantom Menace
* II: Attack of the Clones
* III: Revenge of the Sith
* The Clone Wars
* VII _(authors didn't give it a name)_

P.S. I know nothing about Stars Wars.

To this end, Markdown’s syntax is comprised entirely of punctuation characters,
which punctuation characters have been carefully chosen so as to look like what
they mean. E.g., asterisks around a word actually look like *emphasis*.
Markdown lists look like, well, lists. Even blockquotes look like quoted
passages of text, assuming you’ve ever used email.

1. I: The Phantom Menace

2. II: Attack of the Clones

3. III: Revenge of the Sith

4. IV: A New Hope

5. V: The Empire Strikes Back

So here are some images I think are great:

![cat](/static/assets/cat.jpg)

![mountains](/static/assets/mountains.jpg)

Because of Jekyll’s flexibility, there are many solutions to how to do this.
One common solution is to create a folder in the root of the project directory
called something like `assets` or `downloads`, into which any images, downloads
or other resources are placed. Then, from within any post, they can be linked
to using the site’s root as the path for the asset to include. Again, this will
depend on the way your site’s (sub)domain and path are configured, but here
some examples (in Markdown) of how you could do this using the `site.url`
variable in a post.

> The technological singularity, or simply the singularity, is a hypothetical
> moment in time when artificial intelligence will have progressed to the point
> of a greater-than-human intelligence, radically changing civilization, and
> perhaps human nature.

## Second-level Heading

One of Jekyll’s best aspects is that it is “blog aware”. What does this mean,
exactly? Well, simply put, it means that blogging is baked into Jekyll’s
functionality. If you write articles and publish them online, this means that
you can publish and maintain a blog simply by managing a folder of text-files
on your computer.

### Third-level Heading

Chances are, at some point, you’ll want to include images, downloads, or other
digital assets along with your text content. While the syntax for linking to
these resources differs between Markdown and Textile, the problem of working
out where to store these files in your site is something everyone will face.

* * *

Lets take a break and return to **_the basics_**. Simple _italic_ and **bold**.

Here's a dog.

![dog](/static/assets/dog.jpg)
