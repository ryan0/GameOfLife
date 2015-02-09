function Cell()
{
	this.alive = false;
	this.aliveNext = false;
	this.neighbors =   [[-1,1], [0,1],	[1,1],
						[-1,0], 		[1,0],
						[-1,-1],[0,-1],	[1,-1]];
}

Cell.prototype.update = function(x, y)
{
	if(this.alive != this.aliveNext)
	{
		this.alive = this.aliveNext;
	}
	if(this.alive)
	{
		ctx.fillStyle = rgb(0, 255, 0);
		ctx.fillRect(x * Screen.width / width, y * Screen.height / height, Screen.width / width, Screen.height / height);
	}
};

Cell.prototype.checkAlive = function()
{
	var neighborsAlive = 0;			
	
	for(var i = 0; i < 8; i++)
		if(cells[this.neighbors[i][0]][this.neighbors[i][1]].alive) neighborsAlive++;
	
	if (neighborsAlive == 3 || (neighborsAlive == 2 && this.alive)) 
		this.aliveNext = true;
	else 
		this.aliveNext = false;
};