---
layout: page
title:  Blog
---

<ul style="list-style-type:none; padding-left:0px;">
  {% for post in site.posts %}
    <li style="margin-bottom:40px; clear:both">
      <div class="details">
        <h2>{{ post.title }}</h2>
        {% if post.image %}
        <img style="width:150px; margin-right:20px; margin-top:20px; margin-bottom:35px; float:left" src="{{site.media}}{{post.image}}" />
        {% endif %}
        <div class="meta">
           <span class="date">{{ post.date | date_to_long_string }}</span>
           <span class="author">{{ post.author }}</span>
        </div>
      </div>
      <div class="excerpt">
        {{ post.content | markdownify | strip_html | truncatewords: 45 }}
        <a href="{{ post.url }}" title="read full post">Read more &raquo;</a>
      </div>    
    </li>
  {% endfor %}
</ul>
