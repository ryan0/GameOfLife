var prevTime = new Date().getTime();
function update()
{
	if(playing)
	{
		var currentTime = new Date().getTime();
		if(currentTime - prevTime > 100)
		{
			prevTime = currentTime;
			for(var x = 0; x < width; x++)
				for(var y = 0; y < height; y++)
					cells[x][y].checkAlive();
		}
	}
}

function draw()
{
	ctx.fillStyle = rgb(0, 0, 0);
	ctx.fillRect(0,0, Screen.width, Screen.height);
	
	for(var x = 0; x < width; x++)
		for(var y = 0; y < height; y++)
			cells[x][y].update(x, y);
}

function run()
{
	requestAnimationFrame(run);
	handleMouseInput();
	update();
	draw();
}


var Screen = document.getElementById("screen");
Screen.width = window.innerWidth;
Screen.height = window.innerHeight * .8;

var ctx = Screen.getContext("2d");			
var cells = []; 
var width = 64;
var height = 32; 

for(var x = 0; x < width; x++)
{
	cells.push([]);
	for(var y = 0; y < height; y++)
	{
		cells[x].push(new Cell());
	}
}
	
for(var x = 0; x < width; x++)
{
	for(var y = 0; y < height; y++)
	{
		for(var i = 0; i < 8; i++)
		{
			cells[x][y].neighbors[i][0] += x;
			cells[x][y].neighbors[i][1] += y;
			
			if(cells[x][y].neighbors[i][0] < 0) 		cells[x][y].neighbors[i][0] = width - 1;
			if(cells[x][y].neighbors[i][1] < 0) 		cells[x][y].neighbors[i][1] = height - 1;
			if(cells[x][y].neighbors[i][0] >= width) 	cells[x][y].neighbors[i][0] = 0;
			if(cells[x][y].neighbors[i][1] >= height)	cells[x][y].neighbors[i][1] = 0;
		}
	}
}

run();