---
layout: default
course_number: CS497
title: "Lecture 8: Cross-Site Request Forgery (CSRF) Attack"
---

# Lecture 8

- Cross-Site Request Forgery (CSRF) Attack

## Slides
- [CSRF.pdf](Web_CSRF.pdf)

### Reading 
- Introduction to Computer Security: Chapter 7
- [Same-Origin Policy](https://code.google.com/archive/p/browsersec/wikis/Part2.wiki#Same-origin_policy)
- Cross-Origin Resource Sharing [COR](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [SEED Book](https://www.handsonsecurity.net/): Wenliang Du. Computer Security: A Hands-on Approach (Chapter 9).

### References 
- [Eloquent JavaScript](https://eloquentjavascript.net/) is a book about JavaScript, programming, and the wonders of the digital. 
- [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) Reference
- [High Performance Browser Networking](https://hpbn.co/)
- [Postman](https://www.getpostman.com/]) API development environment
- [A RESTful Tutorial](https://www.restapitutorial.com/)

### Notes
CSRF Attack – Web application tasks are usually linked to speciﬁc urls. For example ```http://site/buy_ stocks?buy=200&stock=yorw``` allowing speciﬁc actions to be performed when requested. 

If a user is logged into the site and an attacker tricks their browser into making a request to one of these task urls, then the task is performed and logged as the logged in user. 

The tricks can be placed on a web page from the attacker; all the attacker needs to do is to trick the user to visit their attacking web page while being logged into the targeted site. 
When the request is made by the user (whether the user is tricked or not), the cookie will be attached to the request automatically by browsers. 
For web applications using HTTP GET: attacker can use image tag ```<img>``` to cause the victim’s browser to send out a HTTP GET request (when the victim visits the attacker’s web page, the HTTP GET request will be initiated by the image tag. 
Here is an example: ```<img src="http://site/buy_stocks?buy=200&stock=yorw">```

For web applications using HTTP POST: sending data to such applications is not as easy as sending data to a GET-based applications,because we cannot append the data to the 
end of URL for POST-based applications. However, with the help of JavaScript, attackers can send the data. The basic idea is for the attacker to craft a web form on his/her site (using JavaScript), and then use JavaScript to automatically submit the form to the target site. 
We cannot use AJAX in this attack, since AJAX can only talk back to the source of the web page [SOP](https://code.google.com/archive/p/browsersec/wikis/Part2.wiki#Same-origin_policy) policy. 
