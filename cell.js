var defaultNeighbors =  [[-1,1],[0,1],	[1,1],
						[-1,0],			[1,0],
						[-1,-1],[0,-1],	[1,-1]];
						
function Cell(x, y)
{
	this.x = x;
	this.y = y;
	this.alive = false;
	this.aliveNext = false;
	this.neighbors =   [];
}

Cell.prototype.draw = function()
{
	if(this.alive != this.aliveNext)
	{
		this.alive = this.aliveNext;
	}
	if(this.alive)
	{
		ctx.fillStyle = '#39CCCC';
		ctx.fillRect(
			this.x * Screen.width() / gameGrid.width, 
			this.y * Screen.height() / gameGrid.height, 
			Screen.width() / gameGrid.width, 
			Screen.height() / gameGrid.height);
	}
};

Cell.prototype.update = function()
{
	var neighborsAlive = 0;			
	
	for(var i = 0; i < 8; i++)
		if(this.neighbors[i].alive) neighborsAlive++;
	
	if (neighborsAlive == 3 || (neighborsAlive == 2 && this.alive)) 
		this.aliveNext = true;
	else 
		this.aliveNext = false;
};