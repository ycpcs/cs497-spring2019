---
layout: default
course_number: CS497
title: "Lecture 5: Computer Networking"
---

# Lecture 5

- Network Security
- Basic Internet technology
- TCP/IP
- Network models and ARP security
- Spoofing, sniffing, session hijacking
- Denial-of-service botnets

### Reading 

- Introduction to Computer Security: Chapter 5

### Slides

- [Computer Networking](Ch05-NetworkModelsARP.pdf)

### In Class Exercise 
- Startup VirtualBox and create three (3) virtual machines. 
- One is used to host applications (server) and other virtual machines are for the victim and the attacker.
- Once the network setup is done, run ```ifconfig``` on all VMs and record the IP address for each VM.
- **Normal Scenario:**
  - Create a folder in *Server* at ```~/testserver```.
  - Create a file named ```test.html``` in ```~/testterver``` with some text content.
  - Open terminal and change directory to ```~/testserver``` and start a python SimpleHTTPServer with command ```python -m SimpleHTTPServer```
  - In ```Victim’s``` browser enter URL http://<server_ip_address>:8000/test.html and observe that we get the expected response. 
- **Victim to Attacker Link Scenario:**
  - Execute the following commands in ```Victim's``` VM
  ```
  sudo iptables -t nat -A OUTPUT -p tcp --dport 80 -j DNAT --to-destination attacker_ip_address
  sudo iptables -t nat -A OUTPUT -p tcp --dport 443 -j DNAT --to-destination attacker_ip_address
  sudo iptables -t nat -A OUTPUT -p tcp --dport 8000 -j DNAT --to-destination attacker_ip_address
  ```
  - Create a folder in *Attacker* at ```~/testserver```.
  - Create a file named ```test.html``` in ```~/testterver``` with some text content.
  - Open terminal and change directory to ```~/testserver``` and start a python SimpleHTTPServer with command ```python -m SimpleHTTPServer```
  - In ```Victim’s``` refresh the browser and observe that we get the expected response. 
