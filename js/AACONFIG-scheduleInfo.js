// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Course Overview", "lectures/lecture01.html"),
		reading: new Reading("Goodrich: Chapter 1"),
		lab: new Lab("Labs Overview ", "lab01.html")		
	},{
		topic: new Topic("Physical Security", "lectures/lecture02.html"),
		reading: new Reading("Goodrich: Chapter 2"),
		lab: new Lab("Lab Module 1", "lab02.html")
	},{
		topic: new Topic("Locks, smart cards, computer forensics", "lectures/lecture02.html"),
		reading: new Reading("Goodrich: Chapter 2"),
		lab: new Lab("Lab Module 1", "lab02.html")
	},{
		topic: new Topic("Operating Systems Security", "lectures/lecture03.html"),
		reading: new Reading("Goodrich: Chapter 3"),
		lab: new Lab("Lab Module 2", "lab03.html")
	},{
		topic: new Topic("Monitoring, filesystem security, buffer-overflow attacks", "lectures/lecture03.html"),
		reading: new Reading("Goodrich: Chapter 3"),
		lab: new Lab("Lab Module 2", "lab03.html")
	},{
		topic: new Topic("Malware. Logic bombs", "lectures/lecture04.html"),
		reading: new Reading("Goodrich: Chapter 4"),
	},{
		topic: new Topic("Trojan horses, viruses, worms, rootkits, adware, spyware", "lectures/lecture04.html"),
		reading: new Reading("Goodrich: Chapter 4"),
	},{
		topic: new Topic("Network Security I", "lectures/lecture05.html"),
		reading: new Reading("Goodrich: Chapter 5"),
	},{
		topic: new Topic("Network Security I", "lectures/lecture05.html"),
		reading: new Reading("Goodrich: Chapter 5"),
	},{
		topic: new Topic("Network Security II", "lectures/lecture06.html"),
		reading: new Reading("Goodrich: Chapter 6"),
	},{
		topic: new Topic("Network Security II", "lectures/lecture06.html"),
		reading: new Reading("Goodrich: Chapter 6"),
	},{
		topic: new Topic("Web Browser Security", "lectures/lecture07.html"),
		reading: new Reading("Goodrich: Chapter 7"),
	},{
		topic: new Topic("Web Browser Security", "lectures/lecture07.html"),
		reading: new Reading("Goodrich: Chapter 7"),
	},{
		topic: new Topic("Cryptography", "lectures/lecture08.html"),
		reading: new Reading("Goodrich: Chapter 8"),
	},{
		topic: new Topic("Cryptography", "lectures/lecture08.html"),
		reading: new Reading("Goodrich: Chapter 8"),
	},{
		topic: new Topic("Applications - Email", "lectures/lecture09.html"),
		reading: new Reading("Goodrich: Chapter 10"),
	},{
		topic: new Topic("Applications - Payment Systems", "lectures/lecture09.html"),
		reading: new Reading("Goodrich: Chapter 10"),
	},{
		topic: new Topic("Applications - Voting systems", "lectures/lecture10.html"),
		reading: new Reading("Goodrich: Chapter 10"),
	},{
		topic: new Topic("Applications - Social Networking", "lectures/lecture10.html"),
		reading: new Reading("Goodrich: Chapter 10"),
	},{
		topic: new Topic("Web Security", "lectures/lecture11.html"),
		reading: new Reading("Discussion"),
	},{
		topic: new Topic("Privacy and Anonymity on the Internet", "lectures/lecture11.html")
	},{
		topic: new Topic("TBD", "lectures/lecture12.html")
	},{
		topic: new Topic("TBD", "lectures/lecture12.html")
	},{
		topic: new Topic("TBD", "lectures/lecture13.html")
	},{
		topic: new Topic("TBD", "lectures/lecture13.html")
	},{
		topic: new Topic("TBD", "lectures/lecture14.html")
	},{
		topic: new Topic("TBD", "lectures/lecture14.html")
	},{
		topic: new Topic("Course wrap up", "lectures/lecture15.html")
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class
courseInfo.finalExamDates = [
		new FinalExamDay("801", new Date("05/13/2018 19:00:00")),
];

// vim:ts=2:
