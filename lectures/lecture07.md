---
layout: default
course_number: CS497
title: "Lecture 7: Web Browser Security"
---

# Lecture 7

- Web Browser Security
- Phishing, cross-site scripting attacks, tracking cookies, privacy
- [Code from class demo](source/index.html)

### Reading 

- Introduction to Computer Security: Chapter 7
- Technical explanation of [MySpace Worm](https://samy.pl/myspace/tech.html) 
- [Same-Origin Policy](https://code.google.com/archive/p/browsersec/wikis/Part2.wiki#Same-origin_policy)

### References 
- [Eloquent JavaScript](https://eloquentjavascript.net/) is a book about JavaScript, programming, and the wonders of the digital. 
- [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) Reference
- [High Performance Browser Networking](https://hpbn.co/)
- [Postman](https://www.getpostman.com/) API development environment
- [A RESTful Tutorial](https://www.restapitutorial.com/)
- [HTTP Methods](https://www.iana.org/assignments/http-methods/http-methods.xhtml)
- Preventing Cross-Site Request Forgery (CSRF) Attacks in [ASP.NET MVC Application](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/preventing-cross-site-request-forgery-csrf-attacks)

### Notes
The world wide web has completely changed the way people use computers. We use it for banking, shopping, education, communication, news, entertainment. 

A web browser identifies a web site with a uniform resource locator or URL. The naming scheme is invented by Tim Burns Lee.

For example, ```https://ycpcs.github.io/cs497-spring2019/schedule.html```, 
```https://ycpcs.github.io``` is the domain name of the web server holding the web site of interest, and the file ```schedule.html``` is the file describing the text and images for a page on this web site using a format called HTML- Hypertext Markup Language. 

Frequently, the name of the file is left out of a URL, in which case a default file is requested, such as ```index.html``` or ```home.html```.

**HTML** Describes the content and formatting of Web Pages and it is rendered within the browser window.
```html
<html>
  <body>
    <h1>My First Heading</h1>
    <p>Test from CS 497</p>
  </body>
</html>
```
Some of the HTML features:
 - Static document description language 
 - Supports linking to other pages and embedding images 
 - User input sent to server via forms

```html
<form>
  First Name: <input type="text" name="fname"><br/>
  Last Name: <input type="text" name="lname"><br/>
  <button type="button">Click Me!</button>
</form>
```

HTML supports plugins – usually for additional media content (PDF, video, music) 
 - Embedding programs in supported languages (JavaScript) provides dynamic content that interacts with the user, modifies the browser User Interface and can access computer environment. 
 
We mentioned **JavaScript**. What is JavaScript? Java Script is 
- Extremely versatile and flexible language
- Variable declarations not necessary and Variables are automatically typed
- Scripting language interpreted by the browser – it gives developers a programming tool. 
- Code enclosed within ```<script> … </script>``` tags
- Can add static content to the page:
```JavaScript
<script type="text/javascript"> document.write("Hello World!");</script>
```
- Can add dynamic text to an HTML page. JavaScript can read and write HTML elements: A JavaScript can read and change the content of an HTML element.
```JavaScript
document.write("<h1>" + name + "</h1>")
```
- Defining functions
```JavaScript
<script type="text/javascript">
	function hello() { alert("Hello world!"); }
</script>
```
- JavaScript can react to events: A JavaScript can be set to execute when something happens, like when a page has finished loading or when a user clicks on or hovers over an HTML element.
```JavaScript
<img src="picture.gif" onMouseOver="javascript:hello()">
```
- Built-in functions can change content of window
```JavaScript
function hello() { 
  alert("Hello world!"); 
	window.open("http://www.ycp.edu")
}
```
- Add hyperlinks: 
```JavaScript
<a href="http://www.ycp.edu">trust me</a>
```
- You can do nasty jokes - Click-jacking attack 
```JavaScript
onMouseUp="window.open('http://evelsite.com')" href="http://www.ycp.edu", '_blank'>Trust Me</a>
```
- JavaScript can be used to validate data: A JavaScript can be used to validate form data before it is submitted to a server. This saves the server from extra processing. **It doesn’t replace server validation.** 
- A JavaScript can be used to detect the visitor’s browser, and - depending on the browser - load another page specifically designed for that browser.

**Cookies**
- Cookies are a small bit of information stored on a computer associated with a specific server
  - When you access a specific website, it might store information as a cookie
  - Every time you revisit that server, the cookie is re-sent to the server
  - Effectively used to hold state information over sessions
- Cookies can hold any type of information 
  - This includes passwords, credit card information, social security number, etc.
  - Almost every large website uses cookies
- Cookies are stored on your computer and can be controlled 
  - Many sites require that you enable cookies in order to use the site
- Cookies expire
  - The expiration is set by the sites' session by default, which is chosen by the server
  - This means that cookies will probably stick around for a while
- ```amazon.com``` example – add item to card, close the browser tab and open it again, item still in card. 
- ```github.com``` example – login and close the page, open page back in and user is still logged in.
- JavaScript can access cookies: A JavaScript can be used to store and retrieve information on the visitor’s computer
```JavaScript 
var cookie = document.cookie
```
- A cookie can be used for authenticating, session tracking (state maintenance), and remembering specific information about users, such as user preferences (metric, languages),or the contents of their shopping carts. The term ```cookie``` is derived from **magic cookie**, a well-known concept in the UNIX computing which inspired both the idea and the name. 

JavaScript can interact with the server (e.g. using Ajax). **Ajax** stands for Asynchronous JavaScript + XML. With Ajax, web applications can retrieve data from the server asynchronously in the background without interfering with the display and behavior of the existing page. 
```JavaScript
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.co/api/people/1");
oReq.send();
```
1. Create a ```XMLHttpRequest``` object
2. Assign object’s load method to a function (think function pointer in C/C++ or an event handler in C#)
3. Call ```open()``` with the appropriate method and target. The method is the type of the request – GET or POST 
4. Call ```send()``` – sends the request to the server
5. The ```responseText``` is the response data as a string

For security reasons, modern browsers do not allow access across domains. This means that both the web page and the XML file it tries to load, must be located on the same server.

Request methods - typically GET or POST
GET requests: 
- Is used to get data from the server
- Can be cached
- Can remain in the browser history
- Can be bookmarked
- Can be distributed & shared
- Can be hacked
A POST request is used for modifying data on the server.
- Every time your request is associated with the processing of a form has side effects (for example, modification of a database or subscription to a service), the method should be POST.

**Access Control**: what is the basis of access control? Difference between *Web* Access Control and *OS* Access Control
- OS is **stateful**, meaning after a user is authenticated, it is remembered until the user logs out. The OS keeps the state: the authenticated user gets a process with his/her privileges; this process keeps the fact that the user is authenticated. Other users cannot hijack this process.
- Web server is **stateless** meaning when a user is authenticated, he/she may send several other requests. The entire duration is called a session. Since web server is stateless, it does not remember anything about this session. Namely, when the user sends a request, the server does not know whether they are from the same session (hence, from the same user). To put in another perspective, because of the lack of session concept at web server, *each web request* has to be authenticated; otherwise, attackers can hijack user's session.

**Cross-Site Scripting (XSS) Attack**

Attacker injects malicious JavaScript code to the target web site X
1. Website allows posting of comments in a guestbook
2. Server incorporates comments into page returned
3. Attacker can post comment that includes malicious JavaScript
 - When other users browse the infected pages from X, the browser believes that the JavaScript is from X.
 - The Same Origin Policy allows the malicious JavaScript to access cookies of X, which can send legitimate HTTP requests to X on behalf of the users, without the users’ consent.
- See narative from [MySpace Worm](https://samy.pl/myspace/tech.html) 
Potential Damage of XSS
- Sending unauthorized requests on behalf of the victims.
- Web defacing: the malicious JavaScript code can access and modify the DOM objects within the page. For example, it can replace a picture in the web page with a different picture.
Countermeasures
- Do a better filtering (proven difficult).
- ```noscript``` region: Do not allow JavaScript to appear in certain region of a web page.

**Cross-Site Request Forgery (CSRF) Attack**

Web application tasks are usually linked to specific URLs allowing specific actions to be performed when requested: ```http://site/buy_ stocks?buy=200&stock=YORW```
- If a user is logged into the site and an attacker tricks their browser into making a request to one of these task URLs, then the task is performed and logged as the logged in user. The tricks can be placed on a web page from the attacker; all the attacker needs to do is to trick the user to visit their attacking web page while being logged into the targeted site.
- When the request is made by the user (whether the user is tricked or not), the cookie will be attached to the request automatically by browsers.
- For web applications using HTTP GET: attacker can use image tag ```<img>``` to cause the victim’s browser to send out a HTTP GET request (when the victim visits the attacker’s web page, the HTTP GET request will be initiated by the image tag:
```<img src="http://site/buy_stocks?buy=200&stock=YORW">```

Difference between CSRF and XSS
- CSRF does not need to run JavaScript code (for GET requests only); XSS does.
- Using JavaScript code:
   - CSRF: the code runs directly from the attacker’s web page.
   - XSS: the code has to be injected to the target web site’s page.
- Server-side input validation:
 - It does not prevent CSRF, because the attacking contents are not on the target web site.
 - It can prevent XSS to a certain degree, if the malicious JavaScript code can be filtered out.
