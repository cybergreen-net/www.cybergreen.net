---
layout: page
title: Data Source Catalog
fields_to_show: ['Format', 'Taxonomy', 'Risk types', 'Public', 'Relevance']
---

A catalog of data sources on cyber security risks and vulnerabilities.
Cybergreen use many of these data sources in its [Stats Platform][stats].

We welcome contributions. Here are [instructions on how to add a data source &raquo;][add source]

<a class="button" href="https://raw.githubusercontent.com/cybergreen-net/www.cybergreen.net/gh-pages/_data/sources.csv">Download catalog as CSV</a>
<a class="button" href="https://raw.githubusercontent.com/cybergreen-net/www.cybergreen.net/gh-pages/_data/datapackage.json">Download the DataPackage.json</a>

[stats]: http://stats.cybergreen.net/
[add source]: /data-inventory/add/

{% assign schema = site.data.datapackage.resources[0].schema %}

## Data Sources

<div class="data-catalog">
<strong>Showing <span class="total">{{ site.data.sources | size }}</span> of {{ site.data.sources | size }} data sources</strong>

<form class="form-inline hidden data-catalog-search" id="filters">
  <input name="query" type="search" placeholder="Search data sources ..." />
  <div class="field-filters">
  {% for field in page.fields_to_show %}
    <div class="field">
      {{field}} <select name="{{field}}" data-field="{{field}}"></select>
    </div>
  {% endfor %}
  </div>
  <button type="submit" class="btn btn-primary">Filter</button>
</form>

{% for source in site.data.sources %}
<div class="record" data-title="{{source.Title}}">
  <h3 style="margin-bottom:5px">
      {{source.Title}}
      {% if source.Cybergreen == 'yes' %}
      <span class="cg-use" href="http://stats.cybergreen.net" title="This dataset is used in the Cybergreen Data Platform">CG&#10003;</span>
      {% endif %}
      <a class="homepage button" href="{{source.Homepage}}">Project website »</a>
  </h3>
  <div class="description">
    {{source.Description | markdownify}}
  </div>
  <table class="metadata">
  {% for fieldToShow in page.fields_to_show %}
    <!-- hacky way to look up the field -->
    {% for tmpField in schema.fields %}
      {% if fieldToShow == tmpField.name %}
        {% assign field = tmpField %}
      {% endif %}
    {%  endfor %}
    <tr>
      <th data-field="{{field.name}}">
        {{field.name}}
      </th>
      <td class="js-field-value">
        {{ source[field.name] }}
      </td>
      <td class="field-desc">
        {% if field.description and field.description != "" %}
        {{field.description | markdownify}}
        {% endif %}
      </td>
    </tr>
  {% endfor %}
  </table>
</div>
{% endfor %}
</div>

<script src="/js/vendor/jquery-1.11.2.min.js"></script>
<script src="/js/vendor/underscore-1.4.2.js"></script>
<script src="/js/datacatalog.js"></script>

