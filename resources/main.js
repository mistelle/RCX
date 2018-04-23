/*global
	$,
	document,
	console
*/

$(document).ready(
	function () {
		"use strict";
		$("#game").hide();
	}
);

function start(difficulty) {
	"use strict";
	
	$("#main").hide();
	$("#game").show();
	console.log(difficulty);
}