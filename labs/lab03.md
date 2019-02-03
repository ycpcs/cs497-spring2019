---
layout: default
course_number: CS497
title: "Lab 3 - Set-UID"
---

# Set UID lab

Launching attacks on privileged Set-UID root program. Risks of environment variables. Side effects of ```system()```.
        
Set-UID is an important security mechanism in Unix operating systems. When a Set-UID program is run, it assumes the owner's privileges. For example, if the program's owner is root, then when anyone runs this program, the program gains the root's privileges during its execution. Set-UID allows us to do many interesting things, but unfortunately, it is also the culprit of many bad things. Therefore, the objective of this lab is two-fold: 
1. Appreciate its good side: understand why Set-UID is needed and how it is implemented.
2. Be aware of its bad side: understand its potential security problems.

### Lab Description and Tasks

[Set-UID Program Vulnerability Lab](Environment_Variable_and_SetUID.pdf)

Additional information on the SEED project [site](http://www.cis.syr.edu/~wedu/seed/Labs_16.04/Software/Environment_Variable_and_SetUID/). 

### Grading

Post your report in Marmoset by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 40% - Answering the questions
- 60% - Presenting the results and screenshots it took to discover passwords by type used
- *Extra Credit* if you pursue further investigation, beyond what is required by the lab description.

### Tips

- How to Switch Users in a terminal: 
```su [username]``` or ```su - [username]```

- Create a Text File using cat: ```cat > sample.txt```:
  - After pressing Enter, you are not returned to the terminal prompt and you can start entering text directly into your file.
  - Type your lines of text, pressing Enter after each line.
  - When you are done, press Ctrl+D to exit.
  
- To display the username of the current user: ```whoami```. 
  
- To create a user account from a terminal:
  - Open a terminal window.
  - If you are not logged in as root, type the command ```su -``` and enter the root password.
  - Type ```useradd``` followed by a space and the username for the new account.
  - Type ```passwd``` followed by a space and the username again.
  - At the New password: prompt enter a password for the new user and press enter.
  - At the Retype new password: prompt, enter the same password to confirm your selection.

- The variable ```environ``` points to an array of pointers to strings called the *environment*. The last pointer in this array has the value NULL. 

- ```printenv``` command – Print all or part of environment.
```cpp
> export foo='cs497'
> printenv foo
> cs497
```

- How to add a directory to the PATH: ```export PATH="/path/to/dir:$PATH"```
