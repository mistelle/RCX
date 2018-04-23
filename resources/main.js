/*global
	$,
	document,
	Game
*/

$(document).ready(
	function () {
		"use strict";
		$("#game").hide();
	}
);

function start(diff) {
	"use strict";
	
	$("#main").hide();
	$("#game").show();
	difficulty = diff;
	Game.start(diff);
}