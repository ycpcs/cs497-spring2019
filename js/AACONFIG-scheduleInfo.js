// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Lecture 1: TODO", "lectures/lecture01.html"),
		lab: new NumberedLabNoFile(1, "Day 1 lab topic")
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class
courseInfo.finalExamDates = [
		new FinalExamDay("801", new Date("05/13/2018 19:00:00")),
];

// vim:ts=2:
