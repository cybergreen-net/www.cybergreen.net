---
layout: page
title: Mitigation campaign Steps
---

## National CSIRT preparation
1.	National CERT or any equivalent organization to reach out to the constituent ISPs and engage them to participate focused mitigation campaign

•	Brief and get agreement on
(1) target risk conditions  
(2) mitigation methods and
(3) campaign time period

### e.g. Option 1: Mitigating Open SSDP risk
-	Reconfigure the misconfigured devices.
-	Block udp/1900 altogether at the edge of their network.  Block legacy protocols like chargen and echo that don’t have any real use other than DDOS anymore.

### e.g. Option 2: Mitigating Open NTP risk
-	Reconfigure the misconfigured devices.
-	Block NTP monlist requests (block larger port on 123/udp).  It allows normal NTP traffic to proceed while blocking monlist replies.

2.	Once ISPs are on board, establish data receiving points at ISPs

3.	ShadowSever and CyberGreen Mitigation briefing VTC with participating ISP’s PoCs, is possible if needed.  

4.	SS start sending daily risk data to each AS to the data receiving point (email account set as above step 2)

5.	ISPs start mitigation over risk condition
•	Mitigation training material will be provided by CyberGreen
•	Making sure ISPs are ready to take action will be the national CERT or coordinators role

6.	CyberGreen measure the time series trend-line and provide impact analysis.

## Capacity Building Materials: 
Mitigation Best Current Practices over Risk conditions
