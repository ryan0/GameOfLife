var mouseIsDown = false;
var mouse = {x: 0, y: 0};
function mouseMove(event)
{
	mouse.x = Math.floor(event.clientX * (width / Screen.width));
	mouse.y = Math.floor(event.clientY * (height / Screen.height));
}

function mouseDown()
{
	mouseIsDown = true;
}

function mouseUp()
{
	mouseIsDown = false;
}

function handleMouseInput()
{
	if(mouseIsDown)
	{
		cells[getCellId(mouse.x, mouse.y)].alive = true;
		cells[getCellId(mouse.x, mouse.y)].aliveNext = true;
	}
}


var playing = false;
function play()
{
	playing = !playing;
	var playButton = document.getElementById("thePlayButton");
	if(playing)
	{
		playButton.innerHTML = "Stop";
	}
	else
	{
		playButton.innerHTML = "Play";
	}
}

function clearGrid()
{
	for(var x = 0; x < width; x++)
		for(var y = 0; y < height; y++)
		{
			cells[getCellId(x, y)].alive = false;
			cells[getCellId(x, y)].aliveNext = false;
		}
		
	ctx.fillStyle = rgb(0, 0, 0);
	ctx.fillRect(0,0, Screen.width, Screen.height);
}

function rgb(r, g, b)
{
	return "rgb("+r+","+g+","+b+")";
}