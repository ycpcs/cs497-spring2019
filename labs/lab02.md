---
layout: default
course_number: CS497
title: "Lab 2 - Password"
---

# Lab 2 - Password Cracking 

In this lab you will be using a password cracking tool called  [Hash Suite](https://hashsuite.openwall.net/).

### Task 1 - Create hash file 

1. Go to [md5hashgenerator](https://www.md5hashgenerator.com/) and create five (5) different hashes to break.
2. Create one for each of the following:
    - just numbers
    - lower case name
    - lower case word with numbers
    - lower case word with first capitalized
    - lower case word with numbers and first letter capitalized
    - lower case word and numbers with first letter capitalized and one letter a special
character
3. Examples: 12345, password, pass123, Password, Pass23, P@ss23
4. Open a text editor and save the hashes generated. Identify them as user1, user2, etc.
    - Save file to the desktop.
5. Take a screen shot of the user names and passwords for your report.

- Example of the password file

> user1:5f4dcc3b5aa765d61d8327deb882cf99 <br/>
> user2:90f2c9c53f66540e67349e0ab83d8cd0 <br/>
> user3:49838126dd6edf2153ff9d9b56b43d25 <br/>
> user4:827ccb0eea8a706c4c34a16891f84e7b <br/>
> user5:32250170a0dca92d53ec9624f336ca24 <br/>

### Task 2 - Cracking the passwords
1. Open up Hash Suite program
2. Sample tutorial can be found [here](https://hashsuite.openwall.net/tutorial).
3. Click on the Hash_Suite icon then File -&gt; Import -&gt; import a file. Locate and use the has
file you created earlier. This will brute force to find the password.
4. Measure the time it takes to fine all the passwords. Wait at least 15-20 minutes.
5. Identify if not all passwords are found immediately.
6. Take a screen shot of your results for the report. Be sure to include the time it took to
break the password hashes and the order they were broken in.
7. Once done create your report.

### Task 3 - Report

Submit the answers to the following questions in a lab report into Moodle. Be sure to put you
name and class information on the paper.
- Analyze the results and determine which one took the shortest time. The longest time.
Explain why in both cases.
- Why was some user passwords broken before others: example: user1, user2, user3, user4, etc.
- Which one makes the best password? Explain why.
- What are two things you learned from this lab?

### Grading

Post your report in Moodle by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 70% - Answering the questions
- 30% - Presenting the results and screenshots it took to discover passwords by type used

