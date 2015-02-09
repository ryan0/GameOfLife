var prevTime = new Date().getTime();
function update()
{
	if(playing)
	{
		var currentTime = new Date().getTime();
		if(currentTime - prevTime > 100)
		{
			prevTime = currentTime;
			for(var i = 0; i < cells.length; i++)
				cells[i].checkAlive();
		}
	}
}

function draw()
{
	ctx.fillStyle = rgb(0, 0, 0);
	ctx.fillRect(0,0, Screen.width, Screen.height);
	
	for(var i = 0; i < cells.length; i++)
		cells[i].update();
}

function run()
{
	requestAnimationFrame(run);
	handleMouseInput();
	update();
	draw();
}


var Screen;
var ctx;		
var cells = []; 
var width = 1024;
var height = 512; 

function start()
{
	Screen = document.getElementById("screen");
	Screen.width = window.innerWidth;
	Screen.height = window.innerHeight * .8;
	ctx = Screen.getContext("2d");
	
	for(var x = 0; x < width; x++)
		for(var y = 0; y < height; y++)
			cells.push(new Cell(x, y));
			
	for(var i = 0; i < cells.length; i++)
				cells[i].initNeighbors();
				
	for(var x = 1; x < width - 1; x++)
	{
		cells[getCellId(x, 256)].alive = true;
		cells[getCellId(x, 256)].aliveNext = true;
	}
	
	for(var y = 1; y < height - 1; y++)
	{
		cells[getCellId(512, y)].alive = true;
		cells[getCellId(512, y)].aliveNext = true;
	}

	run();
}