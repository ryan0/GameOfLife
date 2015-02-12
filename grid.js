function Grid(width, height)
{
	this.cells = [];
	this.width = width;
	this.height = height;
	
	for(var x = 0; x < this.width; x++)
		for(var y = 0; y < this.height; y++)
			this.cells.push(new Cell(x, y));
			
	for(var i = 0; i < this.cells.length; i++)
	{
		for(var j = 0; j < 8; j++)
		{
			var xCoord = this.cells[i].x + defaultNeighbors[j][0];
			var yCoord = this.cells[i].y + defaultNeighbors[j][1];
			
			if(xCoord < 0) 		xCoord = this.width - 1;
			if(yCoord < 0) 		yCoord = this.height - 1;
			if(xCoord >= this.width) 	xCoord = 0;
			if(yCoord >= this.height)	yCoord = 0;
			
			this.cells[i].neighbors.push(this.getCell(xCoord, yCoord));
		}
	}
}

Grid.prototype.getCell = function(x, y)
{
	return this.cells[x * this.height + y];
}

Grid.prototype.clear = function()
{
	for(var i = 0; i < this.cells.length; i++)
		this.cells[i].aliveNext = false;
		
	this.draw();
}

Grid.prototype.step = function()
{

	for(var i = 0; i < this.cells.length; i++)
		this.cells[i].update();
	
	this.draw();
}

var prevTime = new Date().getTime();
Grid.prototype.update = function()
{
	if(Input.playing)
	{
		var currentTime = new Date().getTime();
		if(currentTime - prevTime > Input.gameSpeed)
		{
			prevTime = currentTime;
			for(var i = 0; i < this.cells.length; i++)
				this.cells[i].update();
		}
	}
}

Grid.prototype.draw = function()
{
	ctx.fillStyle = rgb(0, 0, 0);
	ctx.fillRect(0,0, Screen.width, Screen.height);
	
	if(Input.drawGridLines)
	{
		ctx.lineWidth = .5;
		ctx.strokeStyle = rgb(0, 50, 0);
		for(var x = 0; x <= this.width; x++)
		{
			ctx.beginPath();
			ctx.moveTo(x * Screen.width / gameGrid.width, 0);
			ctx.lineTo(x * Screen.width / gameGrid.width, Screen.height);
			ctx.stroke();
		}
		for(var y = 0; y <= this.height; y++)
		{
			ctx.beginPath();
			ctx.moveTo(0, y * Screen.height / gameGrid.height);
			ctx.lineTo(Screen.width, y * Screen.height / gameGrid.height);
			ctx.stroke();
		}
	}
	
	for(var i = 0; i < this.cells.length; i++)
		this.cells[i].draw();
}