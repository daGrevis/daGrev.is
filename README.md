# [daGrev.is Blog](http://dagrev.is/)

## Installing Environment

~~~
gem install bundler
bundle install
~~~

## Updating Environment

~~~
bundle update
~~~

## Serving Blog

~~~
bundle exec jekyll serve
# or
bundle exec jekyll serve --drafts
~~~

## Building Blog

~~~
bundle exec jekyll build
~~~

Everything will be built into `_site/` directory.

## Building Blog with Docker

~~~
docker run -v $(pwd):/tmp/jekyll -w "/tmp/jekyll" -it --rm irakli/jekyll build
~~~

## Run Containers on Production

~~~
docker-compose up
~~~

**Warning:** Same setup as [daGrev.is production](http://dagrev.is/) may
include other containers besides Nginx (see `docker-compose.yml` and
`nginx.conf`).
