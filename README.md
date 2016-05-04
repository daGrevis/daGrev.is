# daGrev.is Blog

[To blog](http://dagrev.is/).

Blog posts are written in Markdown and can be found in  `_posts/` directory.

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

## Serving with Nginx container

~~~
docker-compose up
~~~

**Warning:** The command above will also run other containers besides Nginx
(see `docker-compose.yml`).
