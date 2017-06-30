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
<br><br>
<i>Table 2. Spam Sent To One CBL Spamtrap, By Top 20 Origin Countries, Past Three Days</i>
<br>

<table class="tftable" border="1">
<tr><th>Country</th><th>Traffic</th><th>% Traffic</th><th>% Cumulative Traffic</th><th>Traffic Rank</th><th>Bot Rank</th><th>Spams/Bots</th></tr>
<tr><td>Total</td><td>158,082,638</td></td><td>100.00</td><td></td><td></td><td></td><td></tr>
<tr><td>US</td><td>52,440,285</td><td>33.17</td><td>33.17</td><td>1</td><td>8</td><td>231</td></tr>
<tr><td>BR</td><td>27,016,447</td><td>17.09</td><td>50.26</td><td>2</td><td>5</td><td>62</td></tr>
<tr><td>VN</td><td>15,119,324</td><td>9.56</td><td>59.83</td><td>3</td><td>2</td><td>15</td></tr>
<tr><td>RU</td><td>7,248,463</td><td>4.59</td><td>64.41</td><td>4</td><td>4</td><td>14</td></tr>
<tr><td>IN</td><td>5,384,253</td><td>3.41</td><td>67.82</td><td>5</td><td>1</td><td>4</td></tr>
<tr><td>MX</td><td>4,685,557</td><td>2.96</td><td>70.78</td><td>6</td><td>10</td><td>23</td></tr>
<tr><td>AR</td><td>3,257,637</td><td>2.06</td><td>72.84</td><td>7</td><td>13</td><td>18</td></tr>
<tr><td>PL</td><td>2,638,323</td><td>1.67</td><td>74.51</td><td>8</td><td>22</td><td>22</td></tr>
<tr><td>UA</td><td>2,557,023</td><td>1.62</td><td>76.13</td><td>9</td><td>23</td><td>22</td></tr>
<tr><td>ES</td><td>2,177,246</td><td>1.38</td><td>77.51</td><td>10</td><td>21</td><td>18</td></tr>
<tr><td>CO</td><td>1,639,560</td><td>1.04</td><td>78.54</td><td>11</td><td>34</td><td>34</td></tr>
<tr><td>IT</td><td>1,546,022</td><td>0.98</td><td>79.52</td><td>12</td><td>12</td><td>8</td></tr>
<tr><td>TR</td><td>1,360,135</td><td>0.86</td><td>80.38</td><td>13</td><td>17</td><td>9</td></tr>
<tr><td>TW</td><td>1,230,689</td><td>0.78</td><td>81.16</td><td>14</td><td>14</td><td>7</td></tr>
<tr><td>ID</td><td>1,212,763</td><td>0.77</td><td>81.93</td><td>15</td><td>6</td><td>2</td></tr>
<tr><td>IQ</td><td>1,179,500</td><td>0.75</td><td>82.67</td><td>16</td><td>36</td><td>28</td></tr>
<tr><td>CN</td><td>1,170,168</td><td>0.74</td><td>83.41</td><td>17</td><td>3</td><td>1</td></tr>
<tr><td>AT</td><td>1,034,575</td><td>0.65</td><td>84.07</td><td>18</td><td>38</td><td>25</td></tr>
<tr><td>RO</td><td>983,530</td><td>0.62</td><td>84.69</td><td>19</td><td>25</td><td>10</td></tr>
<tr><td>DE</td><td>969,088</td><td>0.61</td><td>85.30</td><td>20</td><td>16</td><td>6</td></tr>
</table>

<br><br>

Now the problem is clearly not the huge number of botted hosts in India, but the huge volumes of spam coming from botted systems in the United States. That is, while there are a relatively small number of botted hosts in the United States, those botted hosts are typically particularly aggressive, sending an average of 231 spam/bot, while by comparison, the botted hosts in India send a measly 4 spam/bot. Treating all botted hosts as if they were essentially equivalent is clearly unwarranted. Some of those infected systems are heavy artillery, while others are mere cap guns.

[We must also remember to take the above numbers with a "grain of salt" since that the statistics in the above table are based on a single CBL spamtrap site, which although they are among the best data currently available, may not be reflective of global spam flows overall]


## Teasing Apart US Spam Traffic Sources

Let's now drill down on spam traffic from US ISPs. Where does the majority of US-origin spam traffic actually come from?

For the purpose of this analysis, ISPs are identified by their Autonomous System Number, or "ASN." Many ISPs use only a single ASN, but some (such as rr.com) are associated with multiple ASNs, often as a result of legacy networks getting acquired as a result of mergers and acquisitions. When multiple ASNs are associated with the same ISP, we've aggregated them for the purposes of this analysis.


Table 3. US ASNs, Ranked By Traffic/ASN, Last Three Days, 500K+ spam/ASN

<style type="text/css">
.tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}
.tftable th {font-size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}
.tftable tr {background-color:#d4e3e5;}
.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}
.tftable tr:hover {background-color:#ffffff;}
</style>

<table>
<table class="tftable" border="1">
<tr><th>ASN</th><th>Listings</th><th>% Total</th><th>Traffic</th><th>% Traffic</th><th>Rank</th><th>Spams/Bots</th>
<tr><td>Total</td><td>9,098,790</td></td><td>100.00</td><td>158,082,638</td><td></td><td></td><td>17.37
<tr><td>Total rr.com (sum of all rr.com ASNs shown)</td><td>11,944</td><td>0.13</td><td>6,093,048</td><td>3.85</td><td></td><td></td>
<tr><td>AS20001 rr.com US</td><td>2,427</td><td>0.03</td><td>1,595,433</td><td>1.01</td><td>7</td><td>657</td>
<tr><td>AS10796 rr.com US</td><td>2,714</td><td>0.03</td><td>1,361,222</td><td>0.86</td><td>10</td><td>501</td>
<tr><td>AS11427 rr.com US</td><td>2,180</td><td>0.02</td><td>1,068,145</td><td>0.68</td><td>14</td><td>489</td>
<tr><td>AS11426 rr.com US</td><td>1,808</td><td>0.02</td><td>799,539</td><td>0.51</td><td>26</td><td>442</td>
<tr><td>AS11351 rr.com US</td><td>1,583</td><td>0.02</td><td>747,733</td><td>0.47</td><td>28</td><td>472</td>
<tr><td>AS12271 rr.com US</td><td>1,232</td><td>0.01</td><td>520,966</td><td>0.33</td><td>41</td><td>422</td>
<tr><td>AS20115 charter.net US</td><td>4,998</td><td>0.05</td><td>5,322,681</td><td>3.37</td><td>3</td><td>1,064</td>
<tr><td>AS46892 Winnebago US</td><td>102</td><td>0.00</td><td>2,609,218</td><td>1.65</td><td>5</td><td>25,580</td>
<tr><td>AS12083 knology.net US</td><td>945</td><td>0.01</td><td>1,308,289</td><td>0.83</td><td>11</td><td>1,384</td>
<tr><td>AS11232 midco.net US</td><td>308</td><td>0.00</td><td>1,025,612</td><td>0.65</td><td>15</td><td>3,329</td>
<tr><td>AS33548 unwiredbb.com US</td><td>91</td><td>0.00</td><td>996,577</td><td>0.63</td><td>16</td><td>10,951</td>
<tr><td>AS7922 comcast.net US</td><td>19,793</td><td>0.22</td><td>908,030</td><td>0.57</td><td>19</td><td>45</td>
<tr><td>AS11979 blue.net US</td><td>175</td><td>0.00</td><td>883,478</td><td>0.56</td><td>21</td><td>5,048</td>
<tr><td>AS30036 fortrex.com US</td><td>790</td><td>0.01</td><td>827,467</td><td>0.52</td><td>22</td><td>1,047</td>
<tr><td>AS33363 mybrighthouse.com US</td><td>2,123</td><td>0.02</td><td>819,728</td><td>0.52</td><td>23</td><td>386</td>
<tr><td>AS10835 vcn.com US</td><td>2,123</td><td>0.02</td><td>816,028</td><td>0.52</td><td>25</td><td>9,600</td>
<tr><td>AS19108 suddenlink.net US</td><td>1,083</td><td>0.01</td><td>711,898</td><td>0.45</td><td>30</td><td>657</td>
<tr><td>AS46606 Unified Layer, US</td><td>855</td><td>0.01</td><td>656,722</td><td>0.42</td><td>31</td><td>768</td>
<tr><td>AS33588 bresnan.net US</td><td>309</td><td>0.00</td><td>626,872</td><td>0.40</td><td>32</td><td>2,028</td>
<tr><td>AS174 cogentco.com US</td><td>1,436</td><td>0.02</td><td>566,408</td><td>0.36</td><td>37</td><td>394</td>
<tr><td>AS5056 netins.net US</td><td>262</td><td>0.00</td><td>514,315</td><td>0.33</td><td>43</td><td>1,963</td>
<tr><td>AS22773 cox.net US</td><td>2,575</td><td>0.03</td><td>510,427</td><td>0.32</td><td>44</td><td>198</td></tr></table>


## *Unfiltered* Pain

There is one other reality that we must remember: the spam that the CBL sees all gets blocked (at least if you're using the CBL as part of your spam filtering, as many sites do).

Thus, ironically, if we were to prioritize working on the ISPs that are most broadly represented in the CBL, you'd (in some ways) be wasting your time: the spam from those hosts is already getting blocked, at least at sites that use the CBL.

So now you can see the problem. We need to identify the hosts that are successfully delivering spam IN SPITE of block list entries and other anti-spam heuristics.

Documenting the "false negatives" that get through filtering is a hard and largely thankless job, and one that relies on inherently error-prone mechanisms such as users pushing a "this is spam" button, or perhaps the processing of mail streams by multiple categorization engines.


Author:   Joe St Sauver, Ph.D., Scientist, Farsight Security, Inc.
Member of CyberGreen's Statistics Experts Group


<sup>1</sup> http://www.abuseat.org/
