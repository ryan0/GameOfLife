var gameGrid;
var Screen;
var ctx;

function run() {
	requestAnimationFrame(run);
	Input.update();
	gameGrid.update();
	gameGrid.draw();
}

function rgb(r, g, b) {
	return "rgb("+r+","+g+","+b+")";
}


$(document).ready(function() { 
	Screen = $('#screen');
	Screen.width($('#screen-container').width());
	Screen.height($('#screen-container').height());
	ctx = Screen[0].getContext("2d");
	ctx.canvas.width = Screen.width();
	ctx.canvas.height = Screen.height();

	gameGrid = new Grid(
		Math.floor(Screen.width() / 15.0), 
		Math.floor(Screen.height() / 15.0));
	$('#xInput').val(Math.floor(Screen.width() / 15.0));
	$('#yInput').val(Math.floor(Screen.height() / 15.0));

	run();
});