---
layout: page
title: Statistics
---

<h2><strong>The CyberGreen Technical team and community are working hard to develop Version 2 of our Metrics and Platform</strong></h2>
<a href="http://stats.cybergreen.net"><b>Version 2 Beta Platform is Live!</b></a>

&nbsp;

<strong>Current status of the index: Version 1 of CyberGreen </strong>

The CyberGreen project seeks to collect and present comprehensive data on infections or vulnerable systems on the Internet, measure it based on metrics, visualize it, and re-distribute it to countries, CERTs, or ISPs.

With this initial goal in mind, CSIRT Gadgets created Version 1 of the Index, presented on the CyberGreen Portal. See Figure 1 for a screenshot of the Version 1 CyberGreen Portal, and Figure 2 for an architecture diagram.

<img class="size-full wp-image-266 aligncenter" src="https://cybergreennet.ipage.com/wp-content/uploads/2016/04/stat1.png" alt="stat1" width="717" height="504" />
<p style="text-align: center;">Figure 1: CyberGreen Portal, Version 1</p>
With CIF, Open Source Intelligence data gets collected, filtered, put into the CIF framework, then stored in an Elastic Search database and used to produce the “CyberGreen Index”. The Index attempts to be an indicator of how well a country is doing. In the Version 1 CyberGreen Index, only countries (but not ASNs) would be rated by the index.

It must be noted that there are alternatives to CIF for collecting, filtering, and enriching data. See the ENISA report on standards and tools. https://www.enisa.europa.eu/activities/cert/support/actionable-information/ standards-and-tools-for-exchange-and-processing-of-actionable-information

<strong>Metric / Index </strong>

In CyberGreen Version 1, the metric is defined by the number of infected and number of vulnerable systems by the following formula:

<span style="font-size: 18px; padding-left: 25px;">G = 1 - ((C + V) / 2)</span>

where G is the “Green Index”, C is the percentile rank (“PR”) of compromised nodes, and V is the PR of vulnerable nodes. Both C and V are on a daily count.

<img class="aligncenter wp-image-264 size-full" src="https://cybergreennet.ipage.com/wp-content/uploads/2016/04/stat3.png" alt="stat3'" width="717" height="577" />
<p style="text-align: center;">Figure 2: CIF and CyberGreen Architecture</p>
PR is defined as:

<span style="font-size: 18px; padding-left: 25px;">PR = (L + (0.5 * S)) / N
</span>
Where:
<ul>
 	<li>L = Number of below rank</li>
 	<li>S = Number of same rank</li>
 	<li>N = Total numbers</li>
</ul>
A Green Index G closer to 100 is better.

Note that the index is to be read as an incremental snapshot in time, and only lends itself to comparisons between different points in time. It does <em>not </em>lend itself to comparing different countries. This was confusing (see “Feedback and lessons learned from version 1”) for many countries.

CyberGreen Version 1 treats the index like a temperature curve: if it is too high, something is wrong.

Normalization by number of inhabitants or servers-per-country is intentionally left out at this stage, since it tends to skew the readers’ perception. For example, were one to compare China with the U.S. purely by number of inhabitants, then China might appear to be very well-off as compared to the U.S. But if we instead normalize by number of servers per capita, then the whole comparison might look very different indeed.

Hence normalization is a topic in its own right, and was intentionally not included in Version 1 of CyberGreen’s metrics.

Version 1 of CyberGreen metrics only lists the index on a per-country level. There are no drill-downs for ASNs or specific threats.

<strong>Feedback and lessons learned from Version 1 </strong>

One typical feedback that CyberGreen Version 1 was confronted with is that national CERTs would try to find their respective country, and try to rank themselves against others. However, the index method did not lend itself to this type of comparison. Hence, people got confused and quickly dismissed the whole project.

Concerning metrics, the feedback of CyberGreen’s audience was clear: the metrics in Version 1 would not work for the intended audience, and needed more attention. It was not understandable why a country with very little data / PCs, or even no data (some African countries currently have no data at the time of this writing), would have a better index value than countries doing a lot for “Cyber health”.

Further questions raised in the <em>CyberGreen Statistics Working Group</em> were:
<ul>
 	<li>A breakdown of threats per country and per ASN is necessary</li>
 	<li>Statistics and data need to tell stories. Visualization needs to reflect this</li>
 	<li>CyberGreen needs to advance quickly in order to not lose momentum</li>
 	<li>The “temperature curve” approach to metrics gives policy makers an idea if their country is improving or getting worse over time, but it does not answer why nor does it give hints on how to improve the situation.</li>
</ul>
CyberGreen took the feedback as constructive critique, and is currently working on Version 2 of the whole CyberGreen Portal.

<strong>Version 2 of CyberGreen </strong>

Based on the CyberGreen statistics experts review session in mid-February 2016, we have established a goal for Version 2 of CyberGreen metrics. Our experts group outlined the following characteristics of Version 2 of CyberGreen metrics:
<ul>
 	<li>the group roughly convened on the notion for CyberGreen to address both policy makers as well as CSIRTs and ASNs (ISPs)</li>
 	<li>CyberGreen Portal Version 2 shall address both ASNs (and hence break down statistics on an ASN level) as well as countries</li>
 	<li>CyberGreen Portal Version 2 shall break down statistics by threats (risks) as well</li>
 	<li>Having new, per-ASN / per-Threat as well as per country data</li>
 	<li>There is a need for defining a new metric for calculating a “CyberGreen Index”</li>
</ul>
<a href="http://stats.cybergreen.net"><b>Version 2 Beta Platform is Live!</b></a>

<span style="font-weight: 400;">This platform is primarily intended to be a demo to show platform functionality, and</span><span style="font-weight: 400;"> get <a href="https://www.cybergreen.net/contact/">feedback</a> and engagement from the community. The full rollout of v.2 will be later in the year (December 2016).  </span><span style="font-weight: 400;">As of now, the site does not provide metrics of cyber health. The data and heat map simply illustrate the number (count) of infections and vulnerable devices, and countries are then scored and ranked.</span>[/fusion_text][/fullwidth]
