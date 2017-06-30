---
layout: post
title:  On "Normalizing" or "Scaling" Cybersecurity Metrics and  Measuring The Right Thing For The Right Entities
date:   2016-03-29
---
## Introduction

One challenge of cyber security is deciding where to prioritize one's limited cyber security resources. Who's doing "okay?" Who desperately needs help? Who should we just quarantine until they can get their chaotic users under control? At a minimum, can we at least rank countries according to who's worst/best? We need to have some basis for prioritizing our limited time and resources.

## Focusing On Botted Hosts Sending Spam

To make this problem concrete, consider the terrific spam-related metrics shared by the Spamhaus Composite Blocking List (CBL).<sup>1</sup> On Wednesday, March 9th, 2016, the CBL knew about 9,121,043 IP addresses associated with spam-sending botted hosts. That's a LOT of malware-infected systems!

As shown in table 1, just three countries -- India, Vietnam and China -- account for roughly 1/3rd of all CBL listings, and a total of just 10% of all countries (20 out of 200) collectively accounted for ~3/4ths of all CBL listings:


|Country| Listings| % Total Listings| % Cumulative Total Listings| Rank|
| --- | --- | --- | --- | --- | 
|Total| 9,121,043| --- | --- | --- |
|IN| 1,182,291| 12.96| 12.96| 1 |
|VN| 998,743| 10.95| 23.91| 2 |
|CN| 766,659| 8.41| 32.32| 3 |
|RU| 511,132| 5.60| 37.92| 4 |
|BR| 437,531| 4.80| 42.72| 5 |
|ID| 424,372| 4.65| 47.37| 6 |
|IR| 347,215| 3.81| 51.18| 7 |
|US| 227,315| 2.49| 53.67| 8 |
|TH| 218,422| 2.39| 56.06| 9 |  
|MX| 201,497| 2.21| 58.27| 10 |
|PK| 189,572| 2.08| 60.35| 11 |
|IT| 178,898| 1.96| 62.31| 12 |
|AR| 173,898| 1.96| 62.31| 13 |
|TW| 163,190| 1.79| 66| 14 |
|JP| 150,565| 1.65| 67.65| 15 |
|DE| 147,173| 1.61| 69.27| 16 |
|TR| 137,183| 1.50| 70.77| 17 |
|EG| 133,232| 1.46| 72.23| 18 |
|AU| 130,114| 1.43| 73.66| 19 |
|VE| 118,022| 1.29| 74.95| 20 |


Surely we can all agree that those 20 countries represent the "worst of the worst" when it comes to malware infected systems used to send spam? Surprisingly, no.


## Normalizing By Country Population

Representatives of some of those "top" countries, perhaps feeling a bit self-defensive, may be quick to point out that they've got huge populations, so it really isn't "fair" to just compare "raw counts" between countries. E.g., India has 1,182,291 CBL listings, but spread over a population of over 1.25 billion Indians, that's a rate of just (1,182,291 / 1,250,000,000) * 100 = 0.0945%

By comparison, Italy has 178,898 CBL listings, but a population of only 60 million, which yields a rate of (178,898 / 60,000,000) * 100 = 0.2981%.

Dividing Italy's 0.2981% by India's 0.0945%, we can see that Italy is currently 3.155 times "more infested" than India on a per-capita basis.

Arguably, then, Italy should "obviously" be prioritized ahead of India when it comes to any hypothetical anti-bot "clean up campaign," right? Actually, no. Malware infections per capita represent a measure of infection density. Infection density is important if you're thinking about efficient infection cleanup, but largely irrelevant if your goal is to reduce the impact of the bots on mail servers and their admins.


## Ranking According to Actual Pain Delivered Toward A Target

Mail admins running mail servers under siege from spam really don't care about "infection rates per capita." They care about the spam traffic they're seeing. Fortunately, the CBL has data about that as well. Focusing on spam that's being delivered (vs. botted hosts potentially able to send spam) changes the picture dramatically:

<i>Table 2. Spam Sent To One CBL Spamtrap, By Top 20 Origin Countries, Past Three Days</i>

|Country| Traffic | % Traffic|% Cumulative Traffic |Traffic Rank |Bot Rank |Spams/Bots|
| --- | --- | --- | --- | --- | --- | --- |
|Total|158,082,638|100.00| --- | --- | --- | --- |
|US|52,440,285|33.17|33.17|1|8|231|
|BR|27,016,447|17.09|50.26|2|5|62|
|VN|15,119,324|9.56|59.83|3|2|15|
|RU|7,248,463|4.59|64.41|4|4|14|
|IN|5,384,253|3.41|67.82|5|1|4|
|MX|4,685,557|2.96|70.78|6|10|23|
|AR|3,257,637|2.06|72.84|7|13|18|
|PL|2,638,323|1.67|74.51|8|22|22|
|UA|2,557,023|1.62|76.13|9|23|22|
|ES|2,177,246|1.38|77.51|10|21|18|
|CO|1,639,560|1.04|78.54|11|34|34|
|IT|1,546,022|0.98|79.52|12|12|8|
|TR|1,360,135|0.86|80.38|13|17|9|
|TW|1,230,689|0.78|81.16|14|14|7|
|ID|1,212,763|0.77|81.93|15|6|2|
|IQ|1,179,500|0.75|82.67|16|36|28|
|CN|1,170,168|0.74|83.41|17|3|1|
|AT|1,034,575|0.65|84.07|18|38|25|
|RO|983,530|0.62|84.69|19|25|10|
|DE|969,088|0.61|85.30|20|16|6|


Now the problem is clearly not the huge number of botted hosts in India, but the huge volumes of spam coming from botted systems in the United States. That is, while there are a relatively small number of botted hosts in the United States, those botted hosts are typically particularly aggressive, sending an average of 231 spam/bot, while by comparison, the botted hosts in India send a measly 4 spam/bot. Treating all botted hosts as if they were essentially equivalent is clearly unwarranted. Some of those infected systems are heavy artillery, while others are mere cap guns.

[We must also remember to take the above numbers with a "grain of salt" since that the statistics in the above table are based on a single CBL spamtrap site, which although they are among the best data currently available, may not be reflective of global spam flows overall]


## Teasing Apart US Spam Traffic Sources

Let's now drill down on spam traffic from US ISPs. Where does the majority of US-origin spam traffic actually come from?

For the purpose of this analysis, ISPs are identified by their Autonomous System Number, or "ASN." Many ISPs use only a single ASN, but some (such as rr.com) are associated with multiple ASNs, often as a result of legacy networks getting acquired as a result of mergers and acquisitions. When multiple ASNs are associated with the same ISP, we've aggregated them for the purposes of this analysis.


<i>Table 3. US ASNs, Ranked By Traffic/ASN, Last Three Days, 500K+ spam/ASN</i>

|ASN|Listings|% Total|Traffic|% Traffic|Rank|Spams/Bots|
| --- | --- | --- | --- | --- | --- |
|Total|9,098,790|100.00|158,082,638| --- | --- |17.37|
|Total rr.com (sum of all rr.com ASNs shown)|11,944|0.13|6,093,048|3.85| --- | --- |
|AS20001 rr.com US|2,427|0.03|1,595,433|1.01|7|657|
|AS10796 rr.com US|2,714|0.03|1,361,222|0.86|10|501|
|AS11427 rr.com US|2,180|0.02|1,068,145|0.68|14|489|
|AS11426 rr.com US|1,808|0.02|799,539|0.51|26|442|
|AS11351 rr.com US|1,583|0.02|747,733|0.47|28|472|
|AS12271 rr.com US|1,232|0.01|520,966|0.33|41|422|
|AS20115 charter.net US|4,998|0.05|5,322,681|3.37|3|1,064|
|AS46892 Winnebago US|102|0.00|2,609,218|1.65|5|25,580|
|AS12083 knology.net US|945|0.01|1,308,289|0.83|11|1,384|
|AS11232 midco.net US|308|0.00|1,025,612|0.65|15|3,329|
|AS33548 unwiredbb.com US|91|0.00|996,577|0.63|16|10,951|
|AS7922 comcast.net US|19,793|0.22|908,030|0.57|19|45|
|AS11979 blue.net US|175|0.00|883,478|0.56|21|5,048|
|AS30036 fortrex.com US|790|0.01|827,467|0.52|22|1,047|
|AS33363 mybrighthouse.com US|2,123|0.02|819,728|0.52|23|386|
|AS10835 vcn.com US|2,123|0.02|816,028|0.52|25|9,600|
|AS19108 suddenlink.net US|1,083|0.01|711,898|0.45|30|657|
|AS46606 Unified Layer, US|855|0.01|656,722|0.42|31|768|
|AS33588 bresnan.net US|309|0.00|626,872|0.40|32|2,028|
|AS174 cogentco.com US|1,436|0.02|566,408|0.36|37|394|
|AS5056 netins.net US|262|0.00|514,315|0.33|43|1,963|
|AS22773 cox.net US|2,575|0.03|510,427|0.32|44|198|


## *Unfiltered* Pain

There is one other reality that we must remember: the spam that the CBL sees all gets blocked (at least if you're using the CBL as part of your spam filtering, as many sites do).

Thus, ironically, if we were to prioritize working on the ISPs that are most broadly represented in the CBL, you'd (in some ways) be wasting your time: the spam from those hosts is already getting blocked, at least at sites that use the CBL.

So now you can see the problem. We need to identify the hosts that are successfully delivering spam IN SPITE of block list entries and other anti-spam heuristics.

Documenting the "false negatives" that get through filtering is a hard and largely thankless job, and one that relies on inherently error-prone mechanisms such as users pushing a "this is spam" button, or perhaps the processing of mail streams by multiple categorization engines.


<i>Author:   Joe St Sauver, Ph.D., Scientist, Farsight Security, Inc., Member of CyberGreen's Statistics Experts Group</i>


<sup>1</sup> <a href="http://www.abuseat.org/"> http://www.abuseat.org/ </a>
