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

function toggle() {
	"use strict";
	
	if($("#main").is(":visible")){
		$("#main").hide();
		$("#game").show();
	} else {
		$("#main").show();
		$("#game").hide();
	}
}