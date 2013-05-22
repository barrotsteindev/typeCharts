define(["require", "exports"], function(require, exports) {
    var bCount = 0;
    var graphDiv;
    var barGraph = (function () {
        function barGraph(div) {
            this.div = div;
        }
        barGraph.prototype.units = function (numOfUnits, maxY) {
            var frag = document.createDocumentFragment();
            graphDiv = document.getElementById(this.div);
            var scaleY = document.createElement("div");
            scaleY.id = "scale-y";
            var scaleX = document.createElement("div");
            scaleX.id = "scale-x";
            var tWrap = document.createElement("div");
            tWrap.id = "tWrapper";
            var numofSpans = numOfUnits;
            var counts = maxY / numofSpans;
            for(var i = 1; i <= numofSpans; i++) {
                var newSpan = document.createElement("div");
                var newNum = document.createTextNode((counts * i).toString());
                scaleY.appendChild(newSpan);
                newSpan.id = "span" + i;
                newSpan.appendChild(newNum);
                newSpan.className = "num-span";
                newSpan.style.top = (100 - ((i / numofSpans) * 100)) + "%";
            }
            frag.appendChild(scaleY);
            frag.appendChild(scaleX);
            frag.appendChild(tWrap);
            graphDiv.appendChild(frag);
            var height = parseInt($("#scale-y").css('height'));
        };
        return barGraph;
    })();
    exports.barGraph = barGraph;    
    var Bar = (function () {
        function Bar(div, name, width, height, color) {
            this.div = div;
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.barName = this.name;
        }
        Bar.prototype.appendToGraph = function () {
            this.numBar = bCount;
            bCount++;
            this.numOfElements = document.getElementById(this.div).getElementsByClassName('bar-graph').length;
            var bar = document.createElement("div");
            bar.id = this.name;
            console.log(this.name);
            bar.style.backgroundColor = this.color;
            bar.style.width = "0px";
            bar.style.height = "0px";
            if(this.numOfElements < 1) {
                if(!document.getElementById(this.name)) {
                    var scaleX = document.getElementById("scale-x");
                    document.getElementById(this.div).insertBefore(bar, scaleX);
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
            document.getElementById("tWrapper").appendChild(title);
            var left = (this.numBar * 5 + 1.5) + "em";
            title.style.left += left;
        };
        return Bar;
    })();
    exports.Bar = Bar;    
    function insertAfter(oldE, newE) {
        console.log(oldE);
        var pElem = oldE.parentNode;
        var nextElem = oldE.nextSibling;
        console.log(nextElem);
        pElem.insertBefore(newE, nextElem);
    }
})
