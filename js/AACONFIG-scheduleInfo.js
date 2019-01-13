// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Course Overview", "lectures/lecture01.html"),
		lab: new NumberedLab("1", "labs/lab01.html")
	},{
		topic: new Topic("User Authentication", "lectures/lecture02.html"),
		lab: new NumberedLab("2", "Day 2 lab topic")
	},{
		topic: new Topic("User Authentication", "lectures/lecture02.html")
	},{
		topic: new Topic("User Authentication", "lectures/lecture03.html")
	},{
		topic: new Topic("User Authentication", "lectures/lecture03.html")
	},{
		topic: new Topic("Tools from Applied Cryptography", "lectures/lecture04.html")
	},{
		topic: new Topic("Tools from Applied Cryptography", "lectures/lecture04.html")
	},{
		topic: new Topic("Tools from Applied Cryptography", "lectures/lecture05.html")
	},{
		topic: new Topic("Tools from Applied Cryptography", "lectures/lecture05.html")
	},{
		topic: new Topic("Authentication Protocols", "lectures/lecture06.html")
	},{
		topic: new Topic("Authentication Protocols", "lectures/lecture06.html")
	},{
		topic: new Topic("System Security", "lectures/lecture07.html")
	},{
		topic: new Topic("System Security", "lectures/lecture07.html")
	},{
		topic: new Topic("System Security", "lectures/lecture08.html")
	},{
		topic: new Topic("System Security", "lectures/lecture08.html")
	},{
		topic: new Topic("Software Security", "lectures/lecture09.html")
	},{
		topic: new Topic("Software Security", "lectures/lecture09.html")
	},{
		topic: new Topic("Web Security", "lectures/lecture10.html")
	},{
		topic: new Topic("Web Security", "lectures/lecture10.html")
	},{
		topic: new Topic("Authentication Protocols and Authenticated Key Management", "lectures/lecture11.html")
	},{
		topic: new Topic("Authentication Protocols and Authenticated Key Management", "lectures/lecture11.html")
	},{
		topic: new Topic("Realtime Protocols", "lectures/lecture12.html")
	},{
		topic: new Topic("Realtime Protocols", "lectures/lecture12.html")
	},{
		topic: new Topic("Malicious software", "lectures/lecture13.html")
	},{
		topic: new Topic("Malicious software", "lectures/lecture13.html")
	},{
		topic: new Topic("Firewalls, Perimeter Security and Network Attacks", "lectures/lecture14.html")
	},{
		topic: new Topic("Firewalls, Perimeter Security and Network Attacks", "lectures/lecture14.html")
	},{
		topic: new Topic("Course wrap up")
	},
	
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class
courseInfo.finalExamDates = [
		new FinalExamDay("801", new Date("05/13/2018 19:00:00")),
];

// vim:ts=2:
