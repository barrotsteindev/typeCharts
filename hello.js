var bCount = 0;
var barGraph = (function () {
    function barGraph(divId, unitsmult, maxY) {
        this.divId = divId;
        this.unitsmult = unitsmult;
        this.maxY = maxY;
        var graphDiv = document.getElementById(this.divId);
        console.log(graphDiv);
        var scaleY = document.createElement("div");
        scaleY.id = "scale-y";
        graphDiv.appendChild(scaleY);
        var scaleX = document.createElement("div");
        scaleX.id = "scale-x";
        graphDiv.appendChild(scaleX);
        var tWrap = document.createElement("div");
        tWrap.id = "tWrapper";
        graphDiv.appendChild(tWrap);
        var height = parseInt($("#scale-y").css('height'));
        console.log(height);
        var numofSpans = this.maxY / this.unitsmult;
        var counts = height / numofSpans;
        console.log(counts);
        for(var i = 1; i <= numofSpans; i++) {
            var newSpan = document.createElement("div");
            var newNum = document.createTextNode((counts * i).toString());
            newSpan.id = "span" + i;
            newSpan.appendChild(newNum);
            scaleY.appendChild(newSpan);
            newSpan.className = "num-span";
            newSpan.style.top = (100 - ((i / numofSpans) * 100)) + "%";
        }
    }
    return barGraph;
})();
var Bar = (function () {
    function Bar(div, name, width, height, color) {
        this.div = div;
        this.name = name;
        this.width = width;
        this.height = height;
        this.color = color;
        var graphDiv = document.getElementById(this.div);
        console.log(graphDiv);
    }
    Bar.prototype.appendBar = function () {
        this.numBar = bCount;
        bCount++;
        var numOfElements = document.getElementById(this.div).getElementsByClassName('bar-graph').length;
        console.log(numOfElements);
        var bar = document.createElement("div");
        bar.id = this.name;
        console.log(this.name);
        bar.style.backgroundColor = this.color;
        bar.style.width = "0px";
        bar.style.height = "0px";
        if(numOfElements < 1) {
            if(!document.getElementById(this.name)) {
                var scaleX = document.getElementById("scale-x");
                document.getElementById(this.div).insertBefore(bar, scaleX);
                var x = bar.clientHeight;
                bar.className = 'bar-graph';
                bar.style.width = (this.width).toString() + "em";
                bar.style.height = (this.height).toString() + "em";
                bar.style.marginLeft = "1.5em";
            } else {
                console.log("an element with the id of " + this.name + " already exsits");
            }
        } else {
            var numOfBars = document.getElementById(this.div).getElementsByClassName("bar-graph").length;
            var lastBar = document.getElementById(this.div).getElementsByClassName("bar-graph")[numOfBars - 1];
            insertAfter(lastBar, bar);
            var x = bar.clientHeight;
            bar.className = 'bar-graph';
            bar.style.width = (this.width).toString() + "em";
            bar.style.height = (this.height).toString() + "em";
        }
    };
    Bar.prototype.addTitle = function (input, tDiv) {
        var title = document.createElement("span");
        var text = document.createTextNode(input);
        title.className = 'title';
        title.appendChild(text);
        document.getElementById(tDiv).appendChild(title);
        var left = (this.numBar * 3.15 + 1.85) + "em";
        title.style.left += left;
    };
    return Bar;
})();
function insertAfter(oldE, newE) {
    console.log(oldE);
    var pElem = oldE.parentNode;
    var nextElem = oldE.nextSibling;
    console.log(nextElem);
    pElem.insertBefore(newE, nextElem);
}
