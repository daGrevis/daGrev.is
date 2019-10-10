# [daGrev.is Blog](http://dagrev.is/)

## Developing/Writing Blog

~~~
docker run -v $(pwd):/tmp/jekyll -w "/tmp/jekyll" -p 4000:4000 -it --rm irakli/jekyll serve --host 0.0.0.0 --drafts
~~~

Blog will be served to http://localhost:4000/.

## Building Blog

~~~
docker run -v $(pwd):/tmp/jekyll -w "/tmp/jekyll" -it --rm irakli/jekyll build
~~~

Everything will be built into `_site/` directory. Just deploy that wherever.
