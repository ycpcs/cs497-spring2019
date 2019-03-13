// This file defines basic information about the course,
// such as the course name.  This file must not depend on
// anything defined in header.js.

var PREPOPULATE = true;

var courseInfo = {
	courseName: "CS 497: Cybersecurity",
	classDays: ["Mon", "Wed"],

	// The following is true if final exam is on the LAST day of class;
	// false if final exam is during exam week.
	inClassFinalExam: false,

	// The following is for the college-scheduled final exam.
	// It is not used if final is on last day of class
	finalExamDates: [
		new FinalExamDay("801", new Date("05/13/2019 19:00:00")),
	],

	// This file defines the class periods and final exam days.
	classPeriods: [{
		topic: new Topic("Course Overview & Philosophy", ""),
		lab: new Lab("Lab Module 1 - Overview", "lab01.html"),
		assign: new Assignment("Ethics Guide", "assign/assign01.html", 4)
	},{
		topic: new Topic("Computer Security Introduction", "lectures/lecture01.html"),
		reading: new Reading("Chapter 1"),
		assign: new Assignment("Network Foot-Printing", "labs/lab02b.html", 6)
	},{
		topic: new Topic("Cryptographic Concepts", "lectures/lecture01.html"),
		reading: new Reading("Chapter 1"),
		assign: new Assignment("Password Cracking", "labs/lab02.html", 6)
	}, {
		topic: new Topic("Physical Security", "lectures/lecture02.html"),
		reading: new Reading("Chapter 2")
	}, {
		topic: new Topic("Locks, smart cards, computer forensics", "lectures/lecture02.html"),
		reading: new Reading("Chapter 2"),
		assign: new Assignment("Set-UID Vulnerability", "labs/lab03.html", 12)
	}, {
		topic: new Topic("Snow Day", "")
	},{
		topic: new Topic("Operating Systems Security", "lectures/lecture03.html"),
		reading: new Reading("Chapter 3")
	}, {
		topic: new Topic("Monitoring, filesystem security, buffer-overflow attacks", "lectures/lecture03.html"),
		reading: new Reading("Chapter 3"),
		assign: new Assignment("Buffer Overflow", "labs/lab04.html", 18)
	}, {
		topic: new Topic("Snow Day", ""),
	}, {
		topic: new Topic("Network Security I", "lectures/lecture05.html"),
		reading: new Reading("Chapter 5"),
		assign: new Assignment("ARP spoofing (part 1)", "lectures/lecture05.html", 11)
	}, {
		topic: new Topic("ARP spoofing exercise", "lectures/lecture05.html"),
		reading: new Reading("Chapter 5"),
		assign: new Assignment("ARP spoofing (part 2)", "lectures/lecture05.html", 9)
	}, {
		topic: new Topic("TCP/IP", "lectures/lecture05.html"),
		reading: new Reading("Chapter 5"),
		assign: new Assignment("TCP/IP Attack Lab", "lectures/lecture05.html", 9)
	}, {
		topic: new Topic("Network Security II", "lectures/lecture06.html"),
		reading: new Reading("Chapter 6"),
		assign: new Assignment("Local DNS Attack Lab", "", 7)
	}, {
		topic: new Topic("Network Security II", "lectures/lecture06.html"),
		reading: new Reading("Chapter 6"),
		lab: new Lab("Lab Module 6", "lab06.html")
	}, {
		topic: new Topic("Web Browser Security", "lectures/lecture07.html"),
		reading: new Reading("Chapter 7"),
		lab: new Lab("Lab Module 7", "lab07.html")
	}, {
		topic: new Topic("Web Browser Security", "lectures/lecture07.html"),
		reading: new Reading("Chapter 7"),
		lab: new Lab("Lab Module 7", "lab07.html")
	}, {
		topic: new Topic("Cryptography", "lectures/lecture08.html"),
		reading: new Reading("Chapter 8"),
		lab: new Lab("Lab Module 8", "lab08.html")
	}, {
		topic: new Topic("Cryptography", "lectures/lecture08.html"),
		reading: new Reading("Chapter 8"),
		lab: new Lab("Lab Module 8", "lab08.html")
	}, {
		topic: new Topic("Applications - Email", "lectures/lecture09.html"),
		reading: new Reading("Chapter 10"),
		lab: new Lab("Lab Module 9", "lab09.html")
	}, {
		topic: new Topic("Applications - Payment Systems", "lectures/lecture09.html"),
		reading: new Reading("Chapter 10"),
		lab: new Lab("Lab Module 9", "lab09.html")
	}, {
		topic: new Topic("Applications - Voting systems", "lectures/lecture10.html"),
		reading: new Reading("Chapter 10"),
		lab: new Lab("Lab Module 10", "lab10.html")
	}, {
		topic: new Topic("Applications - Social Networking", "lectures/lecture10.html"),
		reading: new Reading("Chapter 10"),
		lab: new Lab("Lab Module 10", "lab10.html")
	}, {
		topic: new Topic( "** Comprehensive Exam", "" )
	}, {
		topic: new Topic("Review of Exam")
	}, {
		topic: new Topic("Web Security", "lectures/lecture11.html"),
		reading: new Reading("In class discussion"),
		lab: new Lab("Lab Module 11", "lab11.html")
	}, {
		topic: new Topic("Privacy and Anonymity on the Internet", "lectures/lecture11.html"),
		reading: new Reading("In class discussion"),
		lab: new Lab("Lab Module 11", "lab11.html")
	}, {
		topic: new Topic("TBD", "lectures/lecture11.html")
	}, {
		topic: new Topic("Course wrap up", "lectures/lecture13.html")
	}]
};

// Final exam days and class periods are added in AACONFIG-scheduleInfo.js

// vim:ts=2:
