---
layout: default
course_number: CS497
title: "Lab 6 - Local DNS Attack Lab"
---

# Local DNS Attack Lab

### Lab Description and Tasks

The objective of this lab is for students to gain the first-hand experience on various attacks on DNS (Domain Name System). 

[Local DNS Lab](dns/DNS_Local.pdf)

Additional information on the SEED project [site](http://www.cis.syr.edu/~wedu/seed/Labs_16.04/Networking/DNS_Local/). 

### Reference Slides

### Source Files
- Zone Files for DNS Setup
- Zone file for domain ```example.com```: [/var/cache/bind/example.com.db](dns/example.com.db)
- Zone file for DNS reverse lookup: [/var/cache/bind/192.168.0](dns/192.168.0)
  - Note: If you choose different IP addresses or domain names, you need to modify the above configuration and zone files accordingly.
- [scapy script](dns/spoof_dns.py) - used in last 3 tasks.

### Tips
- For this lab you have to use ```NAT Network```
- Task 5 - you may need to clean the cache of the DNS server as it may already contain the domain information of www.example.net

### Expected Output
- Task 2 - [Set up a Local DNS Server](dns/set_local_dns_server.png). When we ping google.com using dig, from the Victim's machine, we can see that it sends DNS query to DNS server 10.0.2.5 
- Task 3 - [Modifying the host file](dns/host_file.png). When we modify the ```/etc/hosts``` file with the IP address of www.bank32.com we get response back from the attacker's machine 10.0.2.4.
- Task 5- [Directly Spoofing Response to User](dns/directly_spoofing_reponse.png) - in our forged reply, we map www.example.com to 10.0.2.4 and authoritative server as 10.0.2.13. You may have to clean the cache of the DNS server using ```sudo rndc flush```
- Task 6 [DNS Cache Poisoning Attack](dns_cache_poisoning_attack.png) - when the attack program is running, we run ```dig www.google.com``` from the user's machine, we see the forged reply from the DNS server with Answer, Authority and Additional section.
- Tasl 7 [DNS Cache Poisoning: targeting the Authority Section](dns/dns_cache_poisoning_authority_default.png) - We run ```dig www.example.com``` on behalf of the user, we see that the user machine gets forged reply from the DNS server with Answer and Authority section. The Authority section contains the forged response.
