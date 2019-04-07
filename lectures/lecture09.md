---
layout: default
course_number: CS497
title: "Lecture 9: Cross-site scripting (XSS) Attack"
---

# Lecture 9

- Cross-site scripting (XSS) Attack

## Slides
- [Web_XSS.pdf](Web_XSS.pdf)

### Reading 
- Introduction to Computer Security: Chapter 7
- [SEED Book](https://www.handsonsecurity.net/): Wenliang Du. Computer Security: A Hands-on Approach (Chapter 10).
- [Same-Origin Policy](https://code.google.com/archive/p/browsersec/wikis/Part2.wiki#Same-origin_policy)
- Cross-Origin Resource Sharing [COR](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### References 
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- [jsop](https://jsoup.org/) Java HTML Parser
- [OWASP Cheat Sheet Series V2](https://github.com/OWASP/CheatSheetSeries#cheat-sheets-index)
- [Eloquent JavaScript](https://eloquentjavascript.net/) is a book about JavaScript, programming, and the wonders of the digital. 
- [Postman](https://www.getpostman.com/]) API development environment
- [A RESTful Tutorial](https://www.restapitutorial.com/)
- Prevent Cross-Site Scripting (**XSS**) in [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-2.2)

### Notes
- Objective of Cross-site scripting (XSS) Attack
  - Attacker injects malicious JavaScript code to the target web site X .
  – When other users browse the infected pages from X, the browser believes that the JavaScript is from X. 
  – TheSame Origin Policy allows the malicious JavaScript to access cookies of X, which can send legitimate HTTP requests to X onbehalf of the users, without the users’ concent.
- Technical explanation of [The MySpace Worm](https://samy.pl/myspace/tech.html). 
  -  Myspace.com: Samy add JavaScript code in his proﬁle; whoever browses the proﬁle will get infected. 
  - The wormadded Samy to the victim’s friendlist, and then furtherpropogate the worms to those who view their proﬁles. 
  -  Samy become a friend of one million users in less than 20 hours. 
- Potential Damage 
  - Sending unauthorized requests on behalf of the victims. 
  - Web defacing: the malicous JavaScript code can access and modify the DOM objects within the page. For example, it can replace a picture in the web page with a different picture.
- Countermeasures
  - Do a better ﬁltering (difﬁcult).
  -  *Noscript* region: Do not allow JavaScript to appear in certain region of a web page.
