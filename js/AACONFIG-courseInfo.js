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
	
	finalExamDates: [
        new FinalExamDay("101/102", new Date("05/16/2019 8:00:00"))
        // new FinalExamDay("102", new Date("12/13/2018 12:45:00"))
    ],
};

// Final exam days and class periods are added in AACONFIG-scheduleInfo.js

// vim:ts=2:
