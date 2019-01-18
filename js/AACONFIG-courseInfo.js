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
	courseInfo.finalExamDates = [
		new FinalExamDay("801", new Date("05/13/2018 19:00:00")),
	];
};

// Final exam days and class periods are added in AACONFIG-scheduleInfo.js

// vim:ts=2:
