---
layout: page
title:  Blog
---


<ul style="line-height:35px">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
