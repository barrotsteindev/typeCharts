import typeCharts = module("typeCharts")
var graph = new typeCharts.barGraph("wrapper"); // insert the id of the div the graph will be drawn in
graph.units(8, 40); //8 is the number of stops that will be drawn on the y scale, and 40 is the maximum value our y scale will have

        // new Bar(a, b, c, d, e); a = div of the graph, b = the desired id of the bar chart, c = width in ems, d = height in ems, e = the color of the bar
        var firstBar = new typeCharts.Bar("wrapper", "firstB", 4, 8, "blue");
        var secondBar = new typeCharts.Bar("wrapper", "secondB", 4, 10, "green");
        var thirdBar = new typeCharts.Bar("wrapper", "thirdB", 4, 6, "gray");

        //bar.appendToGraph() = append bar to the graph you specified when you created a new bar
        firstBar.appendToGraph();
        secondBar.appendToGraph();
        thirdBar.appendToGraph();

        secondBar.addTitle("Heighest", "tWrapper"); // adds the title "Highest" below the graph on the x scale, and tWrapper is the div created for the titles under the bar charts.