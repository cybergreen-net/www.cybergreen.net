# Installation and Local Development Instructions

This website uses [Jekyll](https://jekyllrb.com/) and [Github pages](https://pages.github.com/).

To get started, you will need to install [Ruby]( https://www.ruby-lang.org/en/documentation/installation/) and [RubyGems](https://rubygems.org/pages/download)

Then,

```
# Install Jekyll and Jekyll Redirect From dependency

gem install jekyll
gem install jekyll-redirect-from

# Clone the repository

git clone https://github.com/cybergreen-net/www.cybergreen.net.git

# Navigate to the repository directory

cd www.cybergreen.net/

# Run Jekyll to build and host a local version of the site

jekyll serve --watch

```

You should then be able to View the locally hosted site in your browser at the address `localhost:4000`. As you make changes to the repo, Jekyll will automatically regenerate the site accordingly.

The website uses [Github pages](https://pages.github.com). Once your changes have been pushed to the gh-pages branch, they will go live at [www.cybergreen.net](www.cybergreen.net).
