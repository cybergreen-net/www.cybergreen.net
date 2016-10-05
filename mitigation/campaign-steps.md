---
layout: page
title: Mitigation campaign Steps
---

## National CSIRT preparation

##### 1. National CERT or equivalent organization reaches out to constituent ISPs to engage them to participate in a focused mitigation campaign.

• Brief ISPs and agree on:
. . .* Target Risk Conditions  
. . .* Mitigation methods 
. . .* Campaign time period

#### Example 1: Mitigating Open SSDP risk
1. Reconfigure the misconfigured devices.
2. Block udp/1900 altogether at the edge of their network.  Block legacy protocols like chargen and echo that don’t have any real use other than DDOS anymore.

#### Example 2: Mitigating Open NTP risk
1. Reconfigure the misconfigured devices.
2. Block NTP monlist requests (block larger port on 123/udp).  It allows normal NTP traffic to proceed while blocking monlist replies.

### 2. Once ISPs are on board, establish data receiving points at ISPs.

### 3. CyberGreen and other relevant parties hold mitigation briefing with participating ISPs, is possible and if needed.  

### 4. Data source begins sending daily risk data to each data receiving point.

### 5. ISPs start mitigation over risk conditions
. . .* Mitigation training material will be provided by CyberGreen
. . .* Making sure ISPs are ready to take action will be the national CERT or coordinator's role

### 6.	CyberGreen measures the time series trend-line and provides impact analysis.
