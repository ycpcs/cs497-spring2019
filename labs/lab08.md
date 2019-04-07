---
layout: default
course_number: CS497
title: "Lab 8 - Cross-Site Scripting (XSS) Attack Lab"
---

# Cross-Site Scripting (XSS) Attack Lab
Cross-site scripting (XSS) is a type of computer security vulnerability typically found in web applications. This vulnerability makes it possible for attackers to inject malicious code (e.g. JavaScripts) into victim's web browser. Using this malicious code, the attackers can steal the victim's credentials, such as cookies. The access control policies (i.e., the same origin policy) employed by the browser to protect those credentials can be bypassed by exploiting the XSS vulnerability. Vulnerabilities of this kind have been exploited to craft powerful phishing attacks and browser exploits.

### Lab Description and Tasks

The objective of this lab is to help students understand the Cross-Site Scripting (XSS) attack. A XSS attack involves a victim user, a trusted site, and a malicious site. In this lab, students need to exploit this vulnerability to launch an XSS attack on the modified Elgg, in a way that is similar to what Samy Kamkar did to MySpace in 2005 through the notorious [Samy worm](https://samy.pl/myspace/tech.html). The ultimate goal of this attack is to spread an XSS worm among the users, such that whoever views an infected user profile will be infected, and whoever is infected will add you (i.e., the attacker) to his/her friend list.

[XSS Attack.pdf](Web_XSS_Elgg.pdf)

Additional information on the SEED project [site](http://www.cis.syr.edu/~wedu/seed/Labs_16.04/Web/Web_XSS_Elgg/). 

### Reference
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- Firefox Addon [HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/?src=search) - Show the HTTP header fields. You can edit and resubmit.

### Grading
Post your report in Marmoset by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 30% - Design
- 30% - Observations
- 40% - Explanation
- **Make sure you awnser the questions under Task 4**
- *Extra Credit* if you pursue further investigation, beyond what is required by the lab description.

### Tips
- Before you do any of the tasks, get familiar with Firefor Web Developer Tool and *HTTP Header Live* addon.
- Make sure you are using the right protocol when accessing the web sites - http vs. https 
- To open a link in another browser tab, use the **target** attribute. <a href="https://www.ycp.edu/" target="_blank">Visit YCP</a>
```HTML
<a href="https://www.ycp.edu/" target="_blank">Visit YCP</a>
```

### Expected Output
- Getting Familiar with the [HTTP Header Live](xss/post_http_headers.png/) and [Firefox Developer](xss/post_dev_tools.png) tools.
- Task 1
  - when viewing Samy's profile, the JavaScript code is executed and 'XSS XO XO XO' alert is displayed. 
  - After **Samy** updates [his profile](xss\task1_updating_profile.PNG) and after **Alice** [views it](xss/task1_alice_view_samy_profile.png). 
- Task 2
  - When Alice visits Samy's profile, the injected JavaScript code is executed and displays the cookies in an alert. 
  - After **Samy** updates [his profile](xss\task2_updating_profile.PNG) and after **Alice** [views it](xss/task2_alice_view_samy_profile.png).
- Task 3
  - [Stealing Cookies](xss/task3_stealing_cookies.png). I'm using a separate VM to listens for a connection on the specified port. 
