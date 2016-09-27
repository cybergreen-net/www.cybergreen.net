---
layout: page
title: Who We Are
board:
  - image: BBpaul-twomey.jpg
    name: Dr. Paul Twomey
    title: Board Chair
    description: Dr. Paul Twomey is a co-founder of STASH, the secure digital vault company, and also CEO of Argo Pacific, a high-level international Internet and cybersecurity advisory and incubator firm. Much of Paul’s work focuses on cybersecurity for Fortune 1000 companies and public sector agencies. He served from 2003 to 2009 as President and CEO of ICANN, the international non-profit organization that coordinates many of the key functions of the global Internet. He is a Board member of the Atlantic Council of the United States; the founding Chair of the World Economic Forum’s Global Agenda Council on the Future of the Internet; a Commissioner of the Global Information Infrastructure Commission; and was a member of the Advisory Board of the United Nations’ Digital He@lth Initiative.
  - image: BBrichard-mark.jpg
    name: Dr. Richard Mark Soley
    title: Chairman and CEO of OMG, Executive Director of the Cloud Standards Customer Council, and Executive Director of the Industrial Internet Consortium
    description: Dr. Richard Mark Soley is Chairman and CEO of OMG, Executive Director of the Cloud Standards Customer Council, and Executive Director of the Industrial Internet Consortium. Richard also serves on numerous industrial, technical and academic conference program committees, and speaks all over the world on issues relevant to standards, the adoption of new technology and creating successful companies. He is an active angel investor, and was involved in the creation of both the Eclipse Foundation and Open Health Tools. Dr. Soley holds Bachelor's, Master's and Doctoral degrees in Computer Science and Engineering from the Massachusetts Institute of Technology.
  - image: BByurie-ito copy.png
    name: Yurie Ito
    title: Founder and Executive Director of The CyberGreen Institute
    description: Yurie Ito is a Founder and Executive Director of The CyberGreen Institute, a global non-profit organization focused on improving the cyber ecosystem’s health by providing reliable metrics, measurement, and mitigation best practices to national CERTs, network operators, and policy makers. She is also a Director of Global Coordination Division for the Japan Computer Emergency Response Team Coordination Center (JPCERT/CC).She has previously served 12 years as Technical Director and Global Coordination Director for the organization, and also served at ICANN as a Director of Global Security Programs from 2009-2011. She has been leading a number of international collaborative efforts, including as Chair of the Asia Pacific Computer Emergency Response Team (APCERT), an active member of the Forum of Incident Response and Security Teams (FIRST), and as Board Member of FIRST for 6 years from 2004-2010.She is a nonresident Senior Fellow at the Atlantic Council, associated with the Cyber Statecraft Initiative. Her Master's thesis at the Fletcher School of Law and Diplomacy, Tufts University, was on Managing Global Cyber Health and Security through Risk Reduction.


adviser:
  - image: paul-vixie.png
    name: Dr. Paul Vixie
    title: Chairman and CEO, Farsight Security, CyberGreen Ecosystem Special Adviser
    description: Dr. Paul VIXIE was inducted as an Innovator into the Internet Hall of Fame in 2014 after earning his Ph.D. in Computer Science from KEIO University in 2010. He is a prolific author of open source Internet software including BIND, and of many Internet standards documents concerning DNS and DNSSEC. He was the founder of the first anti-spam company (MAPS, 1996), the first non-profit Internet infrastructure software company (ISC, 1994), the first neutral and commercial Internet exchange (PAIX, 1991), and of Farsight Security (2012), where he now serves as Chairman and Chief Executive Officer.
  - image: fatheroftheinternet.png
    name: Dr. Jun Murai
    title: Father of the Internet in Japan, CyberGreen Advocacy Special Adviser
    description: Dr. Jun Murai is known as the ‘father of the Internet in Japan,’ and, outside of Japan, has also been called the 'Internet samurai.’ In 1984, he developed the Japan University UNIX Network (JUNET), the first-ever inter-university network in that nation.In 1988, he founded the Widely Integrated Distributed Environment Project, a Japanese Internet research consortium, for which he continues to serve as a board member. He is a professor and dean of the Faculty of Environment and Information Studies at Keio University, from which he earned his PhD in computer science in 1987. He served as President of the Japan Network Information Center (JPNIC) and as Vice President of the Japanese Internet Association. He served on the Internet Society’s Board of Trustees from 1997 to 2000. In 1998, he was appointed as one of nine initial directors of the Internet Corporation for Assigned Names and Numbers and served until June 2003. He won the 2005 Internet Society's Jonathan B. Postel Service Award in recognition of his vision and pioneering work that helped spread the Internet across the Asia Pacific region. He was honored with the 2011 Institute of Electrical and Electronics Engineers Internet Award.
  - image: BBdaniel-geer.jpg
    name: Dr. Daniel E. Geer, Jr.
    title: Security Researcher, CyberGreen Metrics Special Adviser
    description: Dan Geer is a security researcher with a quantitative bent. His group at MIT produced Kerberos, and a number of startups later he is still at it — today as Chief Information Security Officer at In-Q-Tel. He writes a lot at every length, and sometimes it gets read. He’s an electrical engineer, a statistician, and someone who thinks truth is best achieved by adversarial procedures.

experts:
  - name: Prof. Manel Medina
    title: Full Professor and Director of MsC Cybersecurity at the Politecnic University of Catalunya (UPC)
  - name: Aaron Kaplan
    title: Unix User and Programmer
  - name: Barry Greene
    title: 25-Year Veteran of Internet Security
  - name: Joe St Sauver, PhD
    title: Scientist with Farsight Security, Inc. Prior to Farsight, St Sauver was with the University of Oregon (UO)
  - name: Pat Cain
    title: Resident Research Fellow of the Anti-Phishing Working Group (APWG)
  - name: Prof Hiroaki Kikuchi
    title: Professor, Meiji University, Board Director, JPCERT/CC
  - name: Wes Young
    title: Security Professional
  - name: David Watson
    title: Director, The Shadowserver Foundation
  - name: Gabriel Iovino
    title: Co-Founder, CSIRT Gadgets Foundation
v2:
  - name: Dan Geer
    title: (CyberGreen)
  - name: Scott Guthery
    title: (Boston Athenæum)
  - name: Manel Medina
    title: (UPC)
  - name: Aaron Kaplan
    title: (CyberGreen, CERT.AT, FIRST)
  - name: Joe St Sauver
    title: (Farsight Security)
  - name: Kayne Naughton
    title: (Cosive)
  - name: Chris Horsley
    title: (Cosive)
  - name: Eireann Leverett
    title: (U. of Cambridge, Centre for Risk Studies)
  - name: David Watson
    title: (ShadowServer Foundation)
---


## Our mission is to help create a more resilient and healthier Internet Ecosystem
{:.no_toc}

*The CyberGreen Initiative* is a global non-profit and collaborative organization conducting activities focused on helping to improve the health of the global Cyber Ecosystem.

CyberGreen will achieve this by providing reliable metrics, measurements, and mitigation best practices to Cyber Security Incident Response Teams (CSIRTs), network operators, and policy makers.

These efforts will facilitate operational cleanup of systems, and will ensure that policy development and capacity building have the insight to focus on reducing systemic risk conditions.


# Board of Directors


{% for member in page.board %}
  <div style="margin-bottom: 50px">
    <img style="width:200px; margin-right:20px; float:left" src="{{site.media}}{{member.image}}" />
    <h4>{{ member.name}}</h4>
    <p style="font-size:15px"> <em>{{ member.title }}</em> </p>

    {{member.description}}
  </div>
{% endfor %}

# Operations
  <div style="margin-bottom: 50px">
<h4>Executive director: Yurie Ito</h4>
<h4>Technical director: Aaron Kaplan</h4>
<h4>Project manager: Arastoo Taslim</h4>

# Special Advisers

{% for member in page.adviser %}
  <div style="margin-bottom: 50px">
  <img style="width:200px; margin-right:20px; float:left" src="{{site.media}}{{member.image}}" />
  <h4>{{ member.name}},</h4>
  <p><em>{{ member.title }}</em></p>

    {{member.description}}
  </div>
{% endfor %}


# v.2 Metrics Working Group

CyberGreen’s community of expert statisticians have been working diligently to develop robust metrics and validate the quality of risk data. Their work is critical for generating the CyberGreen Index and advancing the quality and maturity of its measurement methods.

{% for member in page.v2 %}
<div style="margin-bottom: 50px">
<img style="width:200px; margin-right:20px; float:left" src="{{site.media}}{{member.image}}" />
<h4>{{ member.name}}</h4>  
<em>{{ member.title }}</em>
{% endfor %}


# v.1 Metrics Working Group

# Metrics and Data Advisory Experts

{% for member in page.experts %}
<h4>{{ member.name}}</h4>  <em>{{ member.title }}</em>
{% endfor %}


# Partners

Our partners are the most important part of creating a more secure and resilient cyber ecosystem


## Data Contributors

CyberGreen provides metrics to measure cyber health over time based on data from proven sources. Some of our partners have been helping clean up the Internet for over ten years. We appreciate their long-time contribution to the healthier Internet ecosystem and the collaboration with CyberGreen metrics.

## Sponsors

CyberGreen relies upon our sponsors for our continued operation, and we appreciate the contributions and support from our sponsors.

CyberGreen seeks general sponsorships, as well as partners for specific programs and projects. We need your contributions to empower our global efforts to improve overall cyber health, and reduce current and emerging risks to the cyber ecosystem. Our impact, through improved metrics and capacity building, will increase exponentially with additional contributions and partnerships. We seek to set up a sustainable organization with long-term funding and partners.

<img class="alignnone size-full wp-image-171 aligncenter" src="{{site.media}}jpcert_logo.gif" alt="jpcert_logo" width="335" height="90" />

<img class="alignnone wp-image-210 aligncenter" src="{{site.media}}UK-FCO-Logo.png" alt="UK-FCO-Logo" width="197" height="151" />

<img class="alignnone wp-image-210 aligncenter" src="{{site.media}}csa-logo.jpg" alt="CSA-logo" />



<!--
Dr. Paul Twomey is a co-founder of STASH, the secure digital vault company, and also CEO of Argo Pacific, a high-level international Internet and cybersecurity advisory and incubator firm. Much of Paul’s work focuses on cybersecurity for Fortune 1000 companies and public sector agencies.  Paul served from 2003 to 2009 as President and CEO of ICANN, the international non-profit organization that coordinates many of the key functions of the global Internet. He is a Board member of the Atlantic Council of the United States; the founding Chair of the World Economic Forum’s Global Agenda Council on the Future of the Internet; a Commissioner of the Global Information Infrastructure Commission; and was a member of the Advisory Board of the United Nations’ Digital He@lth Initiative.
-->
