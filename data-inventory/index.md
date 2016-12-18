---
layout: page
title: Data Inventory
---
kjhkjhkjshfkjshkjhkjhkjshfkjshkjhkjhkjshfkjshkjhkjhkjshfkjsh
kjhkjhkjshfkjshkjhkjhkjshfkjshkjhkjhkjshfkjsh
kjhkjhkjshfkjshkjhkjhkjshfkjsh
kjhkjhkjshfkjshkjhkjhkjshfkjshkjhkjhkjshfkjshkjhkjhkjshfkjsh
kjhkjhkjshfkjshkjhkjhkjshfkjsh
kjhkjhkjshfkjshkjhkjhkjshfkjshkjhkjhkjshfkjsh
kjhkjhkjshfkjshkjhkjhkjshfkjsh

{% for source in site.data.sources %}
<div style="margin-bottom:40px;" class="record">
  <h2 style="margin-bottom:5px">
      {{source.Owner}}
  </h2>
  <div class="author" style="color: grey; font-size: 18px; font-style: italic; margin-top:4px">

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
  <div style="margin-top:20px; font-size:14px;" class="description">
    {{source.Description}}
    </div>

  <div style= "margin-top:20px; ">
    <a class="button" href="{{source.Homepage}}">Project website »</a>
    </div>

    <div style= "margin-top:65px; border-bottom: 1pt solid grey;"></div>

</div>
{% endfor %}
