---
layout: page
title: Data Inventory
fields_to_show: ['Format', 'Taxonomy', 'Risk types', 'Public', 'Relevance']
---

A catalog of data sources on cyber security risks and vulnerabilities.

Cybergreen use many of these data sources in its [Stats Platform][stats].

We welcome contributions. Here are [instructions on how to add a data source &raquo;][add source]

[stats]: http://stats.cybergreen.net/
[add source]: /data-inventory/add/

{% assign schema = site.data.datapackage.resources[0].schema %}

<div class="data-catalog">
{% for source in site.data.sources %}
<div class="record">
  <h2 style="margin-bottom:5px">
      {{source.Title}}
      <a class="homepage button" href="{{source.Homepage}}">Project website »</a>
  </h2>
  <!-- <div class="author" style="color: grey; font-size: 18px; font-style: italic;></div> -->
  <div class="description">
    {{source.Description | markdownify}}
  </div>
  <table class="metadata">
  {% for fieldToShow in page.fields_to_show %}
    <!-- super hacky way to look up the field -->
    {% for tmpField in schema.fields %}
      {% if fieldToShow == tmpField.name %}
        {% assign field = tmpField %}
      {% endif %}
    {%  endfor %}
    <tr>
      <th>
        {{field.name}}
        {% if field.description and field.description != "" %}
        <div class="field-desc">{{field.description | markdownify}}</div>
        {% endif %}
      </th>
      <td>
        {{ source[field.name] }}
      </td>
    </tr>
  {% endfor %}
  </table>
</div>
{% endfor %}
</div>

