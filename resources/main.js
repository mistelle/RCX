/*global
	$,
	document
*/

$(document).ready(
	function () {
		"use strict";
		$("#game").hide();
	}
);

function start(difficulty) {
	$("#main").hide();
	$("#game").show();
}