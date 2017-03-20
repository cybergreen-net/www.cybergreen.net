---
layout: page
title: Glossary and Data
---

<br/>
<h1>CyberGreen Metrics</h1>
<h3>Version 2.0 - Risk to Others</h3>
<h4><strong>simple counts &emsp; | &emsp; weight <sub>j</sub> = 1 ∀ j</strong></h4>
Version 2.0 reports a crude measure of DDoS risk to others by country,
by Autonomous System (AS), and by such alternate entities (e.g., enterprises)
as seem relevant. That crude measure is the count of nodes within the scope of
control of the country, the AS, or the entity otherwise defined that have the
configuration that allows them to participate in a DDoS. The count will be
reported by protocol and in sum across all four protocols. Countries, ASs, and
alternate entities will be ranked by the count of nodes available to the
operator of a DDoS amplification attack, i.e.,a rank of 1 is that of the highest
risk. It is that rank that is the v2.0 CyberGreen Index value.

In short, the v2.0 CyberGreen Index equates risk to others to the size of unmet
mitigation tasks required to zero the country’s, the AS’s, or the alternate
entity’s risk to others.

<br>
<br>
<h3>Version 2.1 - Offensive Potential</h3>
<h4><strong>+ amplification factor &emsp; | &emsp; weight <sub>j</sub> = AF <sub>j</sub></strong></h4>
CyberGreen’s v2.1 metrics report risk to others in terms of "How bad could it be?"
This means that CyberGreen v2.1 metrics factor in the scale potential
for amplification by protocol by node. Whereas the v2.0 Index is a rank order
by the size of the unmet mitigation need, the v2.1 Index is a rank order by the
size of the DDoS that could be mounted from the country, the AS, or the
alternate entity should all of their nodes currently available to attackers were
to be used in a single attack. In short, the v2.1 Index measures
"offensive potential" — with the obvious caveat that we do not mean intentional
offense but rather the degree to which the country, the AS, or the alternate
entity can be made to engage in offense whether it wanted to or not.
<br>
<br>
<i> Note: This formula for offensive potential does not take into account maximum upstream speeds of the observed unit. Our metrics experts at CyberGreen are currently discussing developent of metric Version 2.1.5 to address this. <br>Targeted date for implementation: April 2017.<i>
<br>
<br>
<h3>Version 2.2 - Densities</h3>
<h4>
  <strong>
  + densities &emsp; | &emsp; weight <sub>j</sub> = (1 /count(nodes in countryi, etc.))
  </strong>
</h4>
While still conjectural, it is expected that with v2.2, CyberGreen Indices will
begin to include densities, that is to say ranking will be by percentage of a
country’s, an AS’s, or an alternate entity’s nodes that the v2.0 count represents.
