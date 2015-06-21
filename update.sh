#!/bin/bash

OLD_HASH=$(git rev-parse --short HEAD)
git pull
if [[ "${OLD_HASH}" != $(git rev-parse HEAD) ]]; then
    rm -rf _site/
    bundle install
    git checkout Gemfile.lock
    bundle exec jekyll build
fi
