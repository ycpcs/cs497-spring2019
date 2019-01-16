---
layout: default
title: "Lab 2"
---

# Lab 2 - Password CRacking 

In this lab you will be using a password cracking tool called John the Ripper. [Binary](https://www.openwall.com/john/) or the [repo](https://github.com/magnumripper/JohnTheRipper).

# Task 1 - Create hash file 

1. Go to [md5hashgenerator] (https://www.md5hashgenerator.com/) and create six (6) different hashes to break.
2. Create one for each of the following:
    - just numbers
    - lower case name
    - lower case word with numbers
    - lower case word with first capitalized
    - lower case word with numbers and first letter capitalized
    - lower case word and numbers with first letter capitalized and one letter a special
character

3. Examples: 12345, password, pass123, Password, Pass23, P@ss23
4. Open a text editor and save the hashes generated. Identify them as user 1:, user 2:, etc.
    - Save file to the desktop.
5. Take a screen shot of the user names and passwords for your report.

# Task 2 - Cracking the passwords
1. Open up John the Ripper program
2. Introduction to [password racking with John the Ripper](https://www.youtube.com/watch?v=pNedfUt0F8k)
3. Type john –format=raw-md5 then the location of the hash file. This will brute force to
find the password. 
4. Measure the time it takes to fine all the passwords. Wait at least 15-20 minutes.
5. Identify if not all passwords are found immediately.
6. Take a screen shot of your results for the report. Be sure to include the time it took to
break the password hashes and the order they were broken in.
7. Once done create your report.

# Task 3 - Report

Submit the answers to the following questions in a lab report into Moodle. Be sure to put you
name and class information on the paper.
- Analyze the results and determine which one took the shortest time. The longest time.
Explain why in both cases.
- Why was some user passwords broken before others: example: user 1, user 2, user 4, user 3, etc.
- Which one makes the best password? Explain why.
- What are two things you learned from this lab?

# Grading

Post your report in Moodle by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 70% - Answering the questions
- 30% - Presenting the results and screenshots it took to discover passwords by type used
