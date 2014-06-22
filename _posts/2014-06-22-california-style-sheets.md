---
layout: post
title: "California Style Sheets"
date: 2014-06-22 13:00:00
---

In addition to supporting regular HTML content, GitHub Pages support Jekyll, a simple, blog-aware static site generator. Jekyll makes it easy to create site-wide headers and footers without having to copy them across every page. It also offers some other advanced templating features.

![CA](/static/assets/ca.jpg)

Every GitHub Page is run through Jekyll when you push content to a specially named branch within your repository. For User Pages, use the master branch in your username.github.io repository. For Project Pages, use the gh-pages branch in your project's repository. Because a normal HTML site is also a valid Jekyll site, you don't have to do anything special to keep your standard HTML files unchanged. Jekyll has thorough documentation that covers its features and usage. Simply start committing Jekyll formatted files and you'll be using Jekyll in no time.

{% highlight css %}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
{% endhighlight %}
