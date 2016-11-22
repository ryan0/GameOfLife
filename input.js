var Input = 
{
	playing: false,
	drawGridLines: false,
	gameSpeed: 100,
	mouseIsDown: false,
	mouse: {x: 0, y: 0},

	update: function()
	{
		if(this.mouseIsDown)
		{
			gameGrid.getCell(this.mouse.x, this.mouse.y).alive = true;
			gameGrid.getCell(this.mouse.x, this.mouse.y).aliveNext = true;
		}
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
};


$(document).ready(function() {

$( window ).resize(function() {
	Screen.width($('#screen-container').width());
	Screen.height($('#screen-container').height());
	ctx.canvas.width = Screen.width();
	ctx.canvas.height = Screen.height();
});



Screen.mousemove(function(event) {
	var parentOffset = Screen.parent().offset();
	var relX = event.pageX - parentOffset.left;
	var relY = event.pageY - parentOffset.top;

	Input.mouse.x = Math.floor(relX * (gameGrid.width / Screen.width()));
	Input.mouse.y = Math.floor(relY * (gameGrid.height / Screen.height()));
});

Screen.mousedown(function() {
	Input.mouseIsDown = true;
});

Screen.mouseup(function() {
	Input.mouseIsDown = false;
});


Screen.on('touchmove', function(event) {
	event.preventDefault();
	var offset = Screen.offset();
	var relX = event.originalEvent.touches[0].pageX - offset.left;
	var relY = event.originalEvent.touches[0].pageY - offset.top;

	Input.mouse.x = Math.floor(relX * (gameGrid.width / Screen.width()));
	Input.mouse.y = Math.floor(relY * (gameGrid.height / Screen.height()));
});

Screen.on('touchstart', function(event) {
	var offset = Screen.offset();
	var relX = event.originalEvent.touches[0].pageX - offset.left;
	var relY = event.originalEvent.touches[0].pageY - offset.top;

	Input.mouse.x = Math.floor(relX * (gameGrid.width / Screen.width()));
	Input.mouse.y = Math.floor(relY * (gameGrid.height / Screen.height()));

	Input.mouseIsDown = true;
});

Screen.on('touchend', function() {
	Input.mouseIsDown = false;
});

$('#playButton').click(function() {
	Input.playing = !Input.playing;
	if(Input.playing)
		$('#playButton').html('Stop');
	else
		$('#playButton').html('Play');
});

$('#stepButton').click(function() {
	gameGrid.step();
});

$('#clearButton').click(function() {
	gameGrid.clear();
});

$('#stepButton').click(function() {
	gameGrid.step();
});

$('#gridLinesButton').click(function() {
	Input.drawGridLines = !Input.drawGridLines;
});


});