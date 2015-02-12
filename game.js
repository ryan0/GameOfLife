var gameGrid;
var Screen;
var ctx; 

function start()
{
	Screen = document.getElementById("screen");
	Screen.width = window.innerWidth;
	Screen.height = window.innerHeight * .8;
	ctx = Screen.getContext("2d");
	
	gameGrid = new Grid(128, 64);
	
	run();
}

function run()
{
	requestAnimationFrame(run);
	Input.update();
	gameGrid.update();
	gameGrid.draw();
}

function rgb(r, g, b)
{
	return "rgb("+r+","+g+","+b+")";
}