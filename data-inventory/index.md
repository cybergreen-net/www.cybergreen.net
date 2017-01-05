---
layout: page
title: Data Inventory
---

A catalog of data sources on cyber security risks and vulnerabilities.

Cybergreen use many of these data sources in its [Stats Platform][stats].

We welcome contributions. Here are [instructions on how to add a data source &raquo;][add source]

[stats]: http://stats.cybergreen.net/
[add source]: /data-inventory/add/

{% for source in site.data.sources %}
<div style="margin-bottom:25px; padding-bottom: 40px; border-bottom: 1pt solid grey;" class="record">
  <h2 style="margin-bottom:5px">
      {{source.Owner}}
  </h2>
  <!-- <div class="author" style="color: grey; font-size: 18px; font-style: italic;></div> -->

  <div>
    Format: {{source.Format}}
  </div>
  <div>
    Taxonomy: {{source.Taxonomy}}
  </div>
  <div>
    Public: {{source.Public}}
  </div>
  <div>
    Relevance: {{source.Relevance}}
  </div>

  <div style="margin-top:20px; font-size:14px;" class="description">
    {{source.Description}}
  </div>
  <div style= "margin-top:20px; ">
    <a class="button" href="{{source.Homepage}}">Project website »</a>
  </div>
</div>
{% endfor %}
