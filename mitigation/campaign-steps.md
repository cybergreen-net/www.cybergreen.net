---
layout: page
title: Mitigation Campaign Steps
---

### 1. National CERT or equivalent organization reaches out to constituent ISPs to engage them to participate in a focused mitigation campaign.

<div style="margin-bottom: 50px">
</div>

### 2. Brief ISPs and agree on:
*  Target risk conditions 
*  Mitigation methods 
*  Campaign time period

<div style="margin-bottom: 25px">
</div>

<h4> Example 1: Mitigating Open SSDP risk </h4>
1. Reconfigure the misconfigured devices.
2. Block udp/1900 altogether at the edge of their network.  Block legacy protocols like chargen and echo that don’t have any real use other than DDOS anymore.

<h4> Example 2: Mitigating Open NTP risk </h4>
1. Reconfigure the misconfigured devices.
2. Block NTP monlist requests (block larger port on 123/udp).  It allows normal NTP traffic to proceed while blocking monlist replies.

<div style="margin-bottom: 50px">
</div>

### 3. Once ISPs are on board, establish data receiving points at ISPs.

<div style="margin-bottom: 50px">
</div>

### 4. CyberGreen and other relevant parties hold mitigation briefing with participating ISPs, is possible and if needed.  

<div style="margin-bottom: 50px">
</div>

### 5. Data source begins sending daily risk data to each data receiving point.

<div style="margin-bottom: 50px">
</div>

### 6. ISPs start mitigation over risk conditions.
* Mitigation training material will be provided by CyberGreen
* Ensuring that ISPs are ready to take action will be the national CERT or coordinator's role

<div style="margin-bottom: 50px">
</div>

### 7.	CyberGreen measures the time series trend-line and provides impact analysis.
