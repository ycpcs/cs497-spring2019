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
		assign: new Assignment("TCP/IP Attack Lab", "labs/lab05.html", 9)
	}, {
		topic: new Topic("TCP/IP Attack Lab", ""),
	},{
		topic: new Topic("Network Security II- DNS", "lectures/lecture06.html"),
		reading: new Reading("Chapter 6"),
		assign: new Assignment("Local DNS Attack Lab", "labs/lab06.html", 7)
	}, {
		topic: new Topic("DNS Atacks", "lectures/lecture06.html"),
		reading: new Reading("Chapter 6")
	}, {
		topic: new Topic("DNS Security", "lectures/lecture06.html"),
		reading: new Reading("Chapter 6")	
	}, {
		topic: new Topic("Web Browser Security", "lectures/lecture07.html"),
		reading: new Reading("Chapter 7"),
		lab: new Lab("Lab Module 7", "lab07.html")
	}, {
		topic: new Topic("Cross-Site Request Forgery (CSRF) Attack", "lectures/lecture08.html"),
		reading: new Reading("Chapter 7"),
		assign: new Assignment("Cross-Site Request Forgery (CSRF) Attack Lab", "labs/lab07.html", 7)
	}, {
		topic: new Topic("Cross-Site Request Forgery (CSRF) Attack", "lectures/lecture08.html"),
		reading: new Reading("Chapter 7")		
	}, {
		topic: new Topic("Cross-Site Scripting (XSS) Attack", "lectures/lecture09.html"),
		reading: new Reading("Chapter 7"),
		assign: new Assignment("Cross-Site Scripting (XSS) Attack Lab", "labs/lab08.html", 9)
	}, {
		topic: new Topic("Cross-Site Scripting (XSS) Attack", "lectures/lecture09.html"),
		reading: new Reading("Chapter 7")
	}, {
		topic: new Topic("SQL Injection Attack", "lectures/lecture10.html"),
		assign: new Assignment("SQL Injection Attack Lab", "labs/lab09.html", 11)
	}, {
		topic: new Topic("SQL Injection Attack", "lectures/lecture10.html")
	}, {
		topic: new Topic("Review for Exam"),
		reading: new Reading("Chapter 1 - 7")
	}, {
		topic: new Topic( "** Comprehensive Exam", "" ),
		reading: new Reading("Chapter 1 - 7")
	}, {
		topic: new Topic("Exam Review, Labs Wrap-up, Project Work", "")
	}, {
		topic: new Topic("Project work", "")
	}, {
		topic: new Topic("Course wrap up. OWASP Top Ten Project", "https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project")
	}]
};

// Final exam days and class periods are added in AACONFIG-scheduleInfo.js

// vim:ts=2:
