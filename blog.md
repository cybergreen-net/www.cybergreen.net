---
layout: page
title:  Blog
---

<ul style="list-style-type:none; padding-left:0px;">
  {% for post in site.posts %}
    <li style="margin-bottom:40px">
      <div class="details">
        <h2>{{ post.title }}</h2>
        <div class="meta">
           <span class="date">{{ post.date | date_to_long_string }}</span>
           <span class="author">{{ post.author }}</span>
        </div>
      </div>
      <div class="excerpt">
        {{ post.content | markdownify | strip_html | truncatewords: 45 }}
        <a href="{{ post.url }}" title="read full post">read more </a>
      </div>    
    </li>
  {% endfor %}
</ul>
