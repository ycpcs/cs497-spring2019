// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Course Overview", "lectures/lecture01.html"),
		lab: new Lab("Labs Overview ", "labs/lab01.html")
	},{
		topic: new Topic("Physical Security", "lectures/lecture02.html"),
		lab: new Lab("Lab Module 1", "labs/lab02.html")
	},{
		topic: new Topic(" Locks, smart cards, computer forensics", "lectures/lecture02.html"),
		lab: new Lab("Lab Module 1", "labs/lab02.html")
	},{
		topic: new Topic("Operating Systems Security", "lectures/lecture03.html"),
		lab: new Lab("Lab Module 2", "labs/lab03.html")
	},{
		topic: new Topic("Monitoring, filesystem security, buffer-overflow attacks", "lectures/lecture03.html"),
		lab: new Lab("Lab Module 2", "labs/lab03.html")
	},{
		topic: new Topic("Malware. Logic bombs", "lectures/lecture04.html")
	},{
		topic: new Topic("Trojan horses, viruses, worms, rootkits, adware, spyware", "lectures/lecture04.html")
	},{
		topic: new Topic("Network Security I", "lectures/lecture05.html")
	},{
		topic: new Topic("Network Security I", "lectures/lecture05.html")
	},{
		topic: new Topic("Network Security II", "lectures/lecture06.html")
	},{
		topic: new Topic("Network Security II", "lectures/lecture06.html")
	},{
		topic: new Topic("Web Browser Security", "lectures/lecture07.html")
	},{
		topic: new Topic("Web Browser Security", "lectures/lecture07.html")
	},{
		topic: new Topic("Cryptography", "lectures/lecture08.html")
	},{
		topic: new Topic("Cryptography", "lectures/lecture08.html")
	},{
		topic: new Topic("Applications I, Email", "lectures/lecture09.html")
	},{
		topic: new Topic("Applications I, Payment Systems", "lectures/lecture09.html")
	},{
		topic: new Topic("Applications II", "lectures/lecture10.html")
	},{
		topic: new Topic("Applications II", "lectures/lecture10.html")
	},{
		topic: new Topic("TBD", "lectures/lecture11.html")
	},{
		topic: new Topic("TBD", "lectures/lecture11.html")
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
		topic: new Topic("Course wrap up", null)
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class
courseInfo.finalExamDates = [
		new FinalExamDay("801", new Date("05/13/2018 19:00:00")),
];

// vim:ts=2:
