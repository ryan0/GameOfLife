var Input = 
{
	playing: false,
	mouseIsDown: false,
	mouse: {x: 0, y: 0},
	
	mouseMove: function(event)
	{
		this.mouse.x = Math.floor(event.clientX * (gameGrid.width / Screen.width));
		this.mouse.y = Math.floor(event.clientY * (gameGrid.height / Screen.height));
	},

	mouseDown: function()
	{
		this.mouseIsDown = true;
	},

	mouseUp: function()
	{
		this.mouseIsDown = false;
	},

	update: function()
	{
		if(this.mouseIsDown)
		{
			gameGrid.getCell(this.mouse.x, this.mouse.y).alive = true;
			gameGrid.getCell(this.mouse.x, this.mouse.y).aliveNext = true;
		}
	},

	play: function()
	{
		this.playing = !this.playing;
		var playButton = document.getElementById("thePlayButton");
		if(this.playing)
			playButton.innerHTML = "Stop";
		else
			playButton.innerHTML = "Play";
	},

	clearGrid: function()
	{
		gameGrid.clear();
	}
};