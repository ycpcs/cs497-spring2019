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
Post your report in [Marmoset](https://cs.ycp.edu/marmoset) by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 30% - Design
- 30% - Observations
- 40% - Explanation
- **Make sure you awnser the questions under Task 4**
- **You must provide a screenshot of the network traffic with each attack.**
- *You also need to provide explanation to the observations that are interesting or surprising.*
- *Extra Credit* if you pursue further investigation, beyond what is required by the lab description.

### Tips
- Before you do any of the tasks, get familiar with Firefor Web Developer Tool and *HTTP Header Live* addon.
- Make sure you are using the right protocol when accessing the web sites - http vs. https 
- When you inject JavaScript, ensure it is [not visible](xss/samy_incorrect_code.png) on the profile page. The profile page should be [clear](xss/samy_correct_code.png). 
- Remember, the console/debugger under the developer tools is your friend. 
- To open a link in another browser tab, use the **target** attribute. <a href="https://www.ycp.edu/" target="_blank">Visit YCP</a>
```HTML
<a href="https://www.ycp.edu/" target="_blank">Visit YCP</a>
```
- [String.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

### Expected Output
- Getting Familiar with the [HTTP Header Live](xss/post_http_headers.png/) and [Firefox Developer](xss/post_dev_tools.png) tools.
- Task 1
  - when viewing Samy's profile, the JavaScript code is executed and 'XSS XO XO XO' alert is displayed. 
  - After **Samy** updates [his profile](xss\task1_updating_profile.PNG) and after **Alice** [views it](xss/task1_alice_view_samy_profile.png). 
- Task 2
  - When Alice visits Samy's profile, the injected JavaScript code is executed and displays the cookies in an alert. 
  - After **Samy** updates [his profile](xss\task2_updating_profile.png) and after **Alice** [views it](xss/task2_alice_view_samy_profile.png).
- Task 3
  - [Stealing Cookies](xss/task3_stealing_cookies.png). I'm using a separate VM to listens for a connection on the specified port. 
- Task 4
  - Investigation of add-friend service. Request [URL](xss/task4_add_a_friend.png) and [parameters](xss/task4_add_a_friend_parameters.png) 
  - Alice visits Samy's profile and makes a [new friend](xss/task4_alice_is_friends_with_samy.png). What actually went on the background when viewing the [profile](xss/task4_alice_is_friends_with_samy_http.png) and the actual [request](xss/task4_alice_is_friends_with_samy_request.png).
- Task 5
  - Investigation [HTTP](xss/task5_profile_edit_http.png) and [parameters](xss/task5_profile_edit_parameters_png.PNG)
  - Alice views Samy's profile, but something else was happaning in the [background](xss/task5_alice_views_samy_profile_html.png)
  - Samy can see [his attack](xss/task5_profile_edit_from_samy.png) worked
- Task 6
  - Samy's [clean profile](xss/task6_samy.png) and the [actual profile](xss/task6_samy_profile.png)
  - [Alice](xss/task6_alice_after_samy.png) after it visiting Samy's profile, and [Boby](xss/task6_boby_after_alice.png) after visiting Alice's profile.  
