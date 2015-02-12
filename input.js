var Input = 
{
	playing: false,
	drawGridLines: false,
	gameSpeed: 100,
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
		var playButton = document.getElementById("playButton");
		if(this.playing)
			playButton.innerHTML = "Stop";
		else
			playButton.innerHTML = "Play";
	},

	step: function()
	{
		gameGrid.step()
	},
	
	clearGrid: function()
	{
		gameGrid.clear();
	},
	
	gridLines: function()
	{
		this.drawGridLines = !this.drawGridLines;
	},
	
	speed: function()
	{
		var speedButton = document.getElementById("speedButton");
		if(this.gameSpeed == 200)
		{
			this.gameSpeed = 100;
			speedButton.innerHTML = "Normal Speed";
		}
		else if(this.gameSpeed == 100)
		{
			this.gameSpeed = 50;
			speedButton.innerHTML = "Fast Speed";
		}
		else if(this.gameSpeed == 50)
		{
			this.gameSpeed = 200;
			speedButton.innerHTML = "Slow Speed";
		}
	},
	
	tinyGrid: function()
	{
		gameGrid = new Grid(32, 16);
	},
	
	smallGrid: function()
	{
		gameGrid = new Grid(64, 32);
	},
	
	normalGrid: function()
	{
		gameGrid = new Grid(128, 64);
	},
	
	largeGrid: function()
	{
		gameGrid = new Grid(256, 128);
	},
	
	hugeGrid: function()
	{
		gameGrid = new Grid(512, 256);
	},
	
	whyGrid: function()
	{
		gameGrid = new Grid(1024, 512);
	}
};