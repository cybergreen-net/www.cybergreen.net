---
layout: page
title: Data Inventory
---


{% for source in site.data.sources %}
<div style="margin-bottom:40px;" class="record">
  <h2 style="margin-bottom:5px">
      {{source.Title}}
  </h2>
  <div class="author" style="color: grey; font-size: 18px; font-style: italic; margin-top:4px">
  {{source.Owner}}
  </div>
  <div>
    Format:{{source.Format}}
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
  <div class="description">
    {{source.Description}}
    <a href="{{source.Homepage}}">Project website »</a>
  </div>
</div>
{% endfor %}
