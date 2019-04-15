---
layout: default
course_number: CS497
title: "Lab 9 - SQL Injection Attack Lab"
---

# SQL Injection Attack Lab
SQL injection is a code injection technique that exploits a security vulnerability occurring in the database layer of an application. The vulnerability is present when user input is either incorrectly filtered for string literal escape characters embedded in SQL statements or user input is not strongly typed and thereby unexpectedly executed.

Many web pages take parameters from web user, and make SQL query to the database. Take for instance when a user login, web page that user name and password and make SQL query to the database to check if a user has valid name and password. With SQL Injection, it is possible for us to send crafted user name and/or password field that will change the SQL query and thus grant us something else.

### Lab Description and Tasks
In this lab, we have created a web application that is vulnerable to the SQL injection attack. Our web application includes the common mistakes made by many web developers. Students' goal is to find ways to exploit the SQL injection vulnerabilities, demonstrate the damage that can be achieved by the attack, and master the techniques that can help defend against such type of attacks.

[SQL_Injection](Web_SQL_Injection.pdf)

Additional information on the SEED project [site](http://www.cis.syr.edu/~wedu/seed/Labs_16.04/Web/Web_SQL_Injection/). 


### Grading
Post your report in [Marmoset](https://cs.ycp.edu/marmoset/login) by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 30% - Design
- 30% - Observations
- 40% - Explanation
- **You must provide a screenshot of the network traffic with each attack.**
- **You also need to provide explanation to the observations that are interesting or surprising.**
- *Extra Credit* if you pursue further investigation, beyond what is required by the lab description.

### Tips
-Task 3.3 make sure you are using SHA1 hash function to generate the hash value of password.
