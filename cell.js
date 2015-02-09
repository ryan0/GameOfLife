var defaultNeighbors =  [[-1,1],[0,1],	[1,1],
						[-1,0],			[1,0],
						[-1,-1],[0,-1],	[1,-1]];

function getCellId(x, y)
{
	return (x * height) + y;
}
						
function Cell(x, y)
{
	this.x = x;
	this.y = y;
	this.alive = false;
	this.aliveNext = false;
	this.neighbors =   [];
}

Cell.prototype.initNeighbors = function()
{
	for(var i = 0; i < 8; i++)
	{
		var xCoord = this.x + defaultNeighbors[i][0];
		var yCoord = this.y + defaultNeighbors[i][1];
		
		if(xCoord < 0) 		xCoord = width - 1;
		if(yCoord < 0) 		yCoord = height - 1;
		if(xCoord >= width) 	xCoord = 0;
		if(yCoord >= height)	yCoord = 0;
		
		this.neighbors.push(cells[getCellId(xCoord, yCoord)]);
	}
}

Cell.prototype.update = function()
{
	if(this.alive != this.aliveNext)
	{
		this.alive = this.aliveNext;
	}
	if(this.alive)
	{
		ctx.fillStyle = rgb(0, 255, 0);
		ctx.fillRect(this.x * Screen.width / width, this.y * Screen.height / height, Screen.width / width, Screen.height / height);
	}
};

Cell.prototype.checkAlive = function()
{
	var neighborsAlive = 0;			
	
	for(var i = 0; i < 8; i++)
		if(this.neighbors[i].alive) neighborsAlive++;
	
	if (neighborsAlive == 3 || (neighborsAlive == 2 && this.alive)) 
		this.aliveNext = true;
	else 
		this.aliveNext = false;
};