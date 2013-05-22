import typeCharts = module("typeCharts")
var graph = new typeCharts.barGraph("graph", 25, 20); // insert the id of the div the graph will be drawn in. the heights in em, and the width in em
var clicked = false;
var i = 0;

document.getElementById("draw").onclick = function ()
{
	if(!(clicked))
	{
		var maxY = document.getElementById("maxY").value;
		var stops = document.getElementById("stops").value;
		graph.units(stops, maxY); //stops is the number of stops that will be drawn on the y scale, and maxY is the maximum value our y scale will have
		clicked = true;
	}
	var width = 4;
	var height = document.getElementById("height").value;
	var color = document.getElementById("color").value;
	
	// new Bar(a, b, c, d, e); a = div of the graph, b = the desired id of the bar chart, c = width in ems, d = height in ems, e = the color of the bar
    var Bar = new typeCharts.Bar("graph", ("graph" + (i + 1)), width, height, color);

    //bar.appendToGraph() = append bar to the graph you specified when you created a new bar
    Bar.appendToGraph();

    var title = document.getElementById("title").value;
    Bar.addTitle(title);

    i++;
};
        //Bar.addTitle("Heighest"); // adds the title "Highest" below the graph on the x scale, and tWrapper is the div created for the titles under the bar charts.