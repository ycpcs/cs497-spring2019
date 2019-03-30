---
layout: default
course_number: CS497
title: "Lecture 7: Web Browser Security"
---

# Lecture 7

- Web Browser Security
- Phishing, cross-site scripting attacks, tracking cookies, privacy


# Reading 

- Introduction to Computer Security: Chapter 7
- Technical explanation of [MySpace Worm](https://samy.pl/myspace/tech.html) 
- [Same-Origin Policy](https://code.google.com/archive/p/browsersec/wikis/Part2.wiki#Same-origin_policy)

# References 
- [Eloquent JavaScript](https://eloquentjavascript.net/) is a book about JavaScript, programming, and the wonders of the digital. 
- [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) Reference
- [High Performance Browser Networking](https://hpbn.co/)
- [Postman](https://www.getpostman.com/]) API development environment

# Notes
The world wide web has completely changed the way people use computers. We use it for banking, shopping, education, communication, news, entertainment. 

A web browser identifies a web site with a uniform resource locator or URL. The naming scheme is invented by Tim Burns Lee.

For example, ```https://ycpcs.github.io/cs497-spring2019/schedule.html```, 
```https://ycpcs.github.io``` is the domain name of the web server holding the web site of interest, and the file ```schedule.html``` is the file describing the text and images for a page on this web site using a format called HTML- Hypertext Markup Language. 

Frequently, the name of the file is left out of a URL, in which case a default file is requested, such as ```index.html``` or ```home.html```.

HTML Describes the content and formatting of Web Pages and it is rendered within the browser window.
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
