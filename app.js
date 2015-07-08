$(function() {
	moment.lang("en");
	$("#firstDiv").hide();
	$("#secondDiv").hide();
	$("#thirdDiv").hide();
	$("#fourthDiv").hide();

$("#currentTimeBtn").on("click", function() {
	var m = moment();
	$("#currentTime").text(m);
});

$("#moreReadableBtn").on("click", function() {
	$("#moreReadable").text(moment().format('hh:mm ss a'));
});

$("#dateBtn").on("click", function() {
	$("#date").text(moment().format('dddd, MMMM DD'));
	$("#firstDiv").fadeIn(5000);
});

$("#marchMadnessBtn").on("click", function() {
	$("#marchMadness").text(moment().diff("2016-3-15", "days")*(-1) + " days");
	$("#secondDiv").fadeIn(5000);
});

$("#timeSinceBtn").on("click", function() {
	$("#timeSince").text(moment().diff("2015-3-17", "days") + " days");
	$("#thirdDiv").fadeIn(5000);
});

$("#spanishBtn").on("click", function() {
	moment.lang("es");
	$("#spanish").text(moment().fromNow());
	$("#fourthDiv").fadeIn(5000);
});

$("#frenchBtn").on("click", function() {
	moment.lang("fr");
	$("#french").text(moment().fromNow());
});


});