#!/bin/bash

rm -rf _site/
git pull -q
bundle install
git checkout Gemfile.lock
bundle exec jekyll build
