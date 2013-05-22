define(["require", "exports", "typeCharts"], function(require, exports, __typeCharts__) {
    var typeCharts = __typeCharts__;

    var graph = new typeCharts.barGraph("wrapper", 25, 20);
    graph.units(8, 40);
    var firstBar = new typeCharts.Bar("wrapper", "firstB", 4, 8, "blue");
    var secondBar = new typeCharts.Bar("wrapper", "secondB", 4, 10, "green");
    var thirdBar = new typeCharts.Bar("wrapper", "thirdB", 4, 6, "gray");
    firstBar.appendToGraph();
    secondBar.appendToGraph();
    thirdBar.appendToGraph();
    secondBar.addTitle("Highest", "tWrapper");
})
