define(["require", "exports", "typeCharts"], function(require, exports, __typeCharts__) {
    var typeCharts = __typeCharts__;

    var graph = new typeCharts.barGraph("graph");
    var clicked = false;
    var i = 0;
    document.getElementById("draw").onclick = function () {
        if(!(clicked)) {
            var maxY = document.getElementById("maxY").value;
            var stops = document.getElementById("stops").value;
            graph.units(stops, maxY);
            clicked = true;
        }
        var width = 4;
        var height = document.getElementById("height").value;
        var color = document.getElementById("color").value;
        var Bar = new typeCharts.Bar("graph", ("graph" + (i + 1)), width, height, color);
        Bar.appendToGraph();
        var title = document.getElementById("title").value;
        Bar.addTitle(title);
        i++;
    };
})
