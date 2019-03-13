---
layout: default
course_number: CS497
title: "Lab 5 - TCP/IP Attack Lab"
---

# TCP/IP Attack Lab

### Lab Description and Tasks

[TCP/IP Attack Lab](TCP_Attacks.pdf)

Additional information on the SEED project [site](http://www.cis.syr.edu/~wedu/seed/Labs_16.04/Networking/TCP_Attacks/). 

### Reference Slides

- [Networks: IP and TCP](../lectures/Ch05-NetworksTCP-IP.pdf)

### Source Files
- [Task 2 skeleton code](tcp/rst_attack.py)

### Grading

Post your report in Marmoset by the scheduled due date in the syllabus. Your grade for this lab will be composed of:
- 30% - Design
- 30% - Observations
- 40% - Explanation
- *Extra Credit* if you pursue further investigation, beyond what is required by the lab description.

### Tips
- Install scrapy by ```sudo apt install python-scrapy```  
- Use ```netstat -na | grep tcp``` to check teh usage of the *TCP* queue before and after each attack. 
- Wireshark
  - To enable auto scroll: Go -> Auto Scroll in Live Capture 
  - To view the ```Next Sequence Number``` - find a TCP packet that doesn't have a zero length payload (```tcp.len > 0``` filter)
  - To filter only telnet packets, use ```tcp.port=23``` 
- **Task #2** - use ```netwox 78``` instead of ```netwox 40```
