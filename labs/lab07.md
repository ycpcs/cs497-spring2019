---
layout: default
course_number: CS497
title: "Lab 7 - Cross-Site Request Forgery (CSRF) Attack Lab"
---

# Cross-Site Request Forgery (CSRF) Attack Lab
Cross-site request forgery, abbreviated as CSRF or XSRF, is a type of malicious exploit of a website whereby unauthorized commands are transmitted from a user that the website trusts.

### Lab Description and Tasks

The objective of this lab is to help students understand the Cross-Site Request Forgery (CSRF or XSRF) attack. A CSRF attack involves a victim user, a trusted site, and a malicious site. The victim user holds an active session with a trusted site while visiting a malicious site. The malicious site injects an HTTP request for the trusted site into the victim user session, causing damages.

Launching the cross-site request forgery attack on a vulnerable web application. Conducting experiments with several countermeasures.

[CSRF Attack.pdf](Web_CSRF_Elgg.pdf)

Additional information on the SEED project [site](http://www.cis.syr.edu/~wedu/seed/Labs_16.04/Web/Web_CSRF_Elgg/). 

### Reference
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- Firefox Addon [HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/?src=search) - Show the HTTP header fields. You can edit and resubmit.

### Grading
Post your report in [Marmoset](https://cs.ycp.edu/marmoset) by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 30% - Design
- 30% - Observations
- 40% - Explanation
- **Make sure you awnser the questions under Task 3**
- **You must provide a screenshot of the network traffic with each attack.**
- *You also need to provide explanation to the observations that are interesting or surprising.*
- *Extra Credit* if you pursue further investigation, beyond what is required by the lab description.

### Tips
- Before you do any of the tasks, get familiar with Firefor Web Developer Tool and *HTTP Header Live* addon. Instructions on how to use this tool is given in the Guideline section (§ 4.1) in the lab description. 
- Make sure you are using the right protocol when accessing the web sites - http vs. https 
- To open a link in another browser tab, use the **target** attribute. <a href="https://www.ycp.edu/" target="_blank">Visit YCP</a>
```HTML
<a href="https://www.ycp.edu/" target="_blank">Visit YCP</a>
```

### Expected Output
- Task 1 
  - Using the <a href="./csrf/task1_post_dev_tools.png" target="_blank">Firefox Developer Tools</a> to view the **HTTP POST request**
  - Using the <a href="./csrf/task1_post_dev_tools_token.png" target="_blank">Firefox Developer Tools</a> to view **unsecured authentication**   
  - Using the <a href="./csrf/task1_post_live_http.png" target="_blank">Firefox Live HTTP addon</a> to view the **HTTP POST request**
  - Using the <a href="./csrf/task1_post_live_http_token.png" target="_blank">Firefox Live HTTP addon</a> to view **unsecured authentication** 
- Task 2
   - Sample <a href="./csrf/task2_add_friend_http_request.PNG" target="_blank">HTTP Request</a> on **Add Friend** button click
   - Alice has a <a href="./csrf/task2_alice_has_message.png" target="_blank">new message</a> and Bob is <a href="./csrf/task2_alice_has_message_no_friend.png" target="_blank">not a friend</a> yet.
   - Alice opens the <a href="./csrf/task2_alice_has_message2.png" target="_blank">message</a> and adds a <a href="./csrf/task2_alice_has_new_friend.png" target="_blank">new friend<a/> ... without her concent. And the <a href="./csrf/task2_alice_has_new_friend_http_request.png" target="_blank">HTTP</a> request.
- Task 3
  - Sample <a href="./csrf/task3_observe_post_request_url.png" target="_blank">HTTP Request</a> on edit profile along with <a href="./csrf/task3_observe_post_request_params.png" target="_blank">parameters</a>.
  - Boby crafting a <a href="./csrf/task3_boby_message_alice.png" target="_blank">message</a> to Alice.
  - Alice mailbox <a href="./csrf/task3_alice_mailbox.png" target="_blank"> before<a> and <a href="./csrf/task3_alice_mailbox_after.png" target="_blank">after</a> the attack. 
  - Alice <a href="./csrf/task3_alice_profile.png" target="_blank">profile</a> after the attack. 
