---
layout: page
title: Data Inventory
---


{% for source in site.data.sources %}
<div class="record">
  <h2>
    <a href="{{source.Homepage}}">
      {{source.Title}}
    </a>
  </h2>
  <div class="author" style="color: grey; font-size: 18px; font-style: italic;">
  {{source.Owner}}
  </div>
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
  <div class="description">
    {{source.Description}}
    <br/>
    <br/>
    <a href="{{source.Homepage}}">Project website »</a>
  </div>
</div>
{% endfor %}
