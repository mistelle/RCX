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

function show() {
	"use strict";
	
	$("#main").show();
	$("#game").show();
}

function hide() {
	"use strict";
	
	$("#main").hide();
	$("#game").hide();
}