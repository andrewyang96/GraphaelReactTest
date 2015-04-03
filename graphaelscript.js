Array.prototype.last = function () {
	return this[this.length-1];
};

// Creates 640  x 480 canvas at (0, 0)
var r = Raphael("chart");
var xPoints = [0];
var yPoints = [10];
var counter = 1;
var stopAt = 200;
var interval = 100;
var options = {symbol: '', axis: '0 0 1 1', axisxstep: 10};
var chart = r.linechart(30, 30, 640, 480, xPoints, yPoints, options);
var z = new Ziggurat();

var updateChart = function () {
	if (counter > stopAt) {
		stopFunc();
		return;
	}
	xPoints.push(counter);
	var delta = z.nextGaussian() / 10;
	yPoints.push(Math.round((yPoints.last() + delta)*100)/100);
	document.getElementById("price").innerHTML = yPoints.last();
	chart.remove();
	chart = r.linechart(30, 30, 640, 480, xPoints, yPoints, options);
	counter += 1;
};

var func = setInterval(updateChart, interval);
var stopFunc = function () {
	clearInterval(func);
};