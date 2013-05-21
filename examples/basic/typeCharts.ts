var bCount = 0; //graph counter
var graphDiv; //the id of the div in which the graph will be 

 export class barGraph {

    units(numOfUnits: number, maxY: number)
    {

    	//add units to the graph

    	graphDiv = document.getElementById(this.div);
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
		var numofSpans = numOfUnits;
		var counts = maxY / numofSpans;
		for(var i = 1; i <= numofSpans; i++)
		{
			var newSpan = document.createElement("div");
			var newNum = document.createTextNode((counts * i).toString());
			newSpan.id = "span" + i;
			newSpan.appendChild(newNum);
			scaleY.appendChild(newSpan);
			newSpan.className = "num-span";
			newSpan.style.top = (100 - ((i / numofSpans) * 100)) + "%";

		}
    }

	constructor(public div: string) {
	};

}

export class Bar {

	public numBar: number;
	public barName: string;
	public numOfElements: number;

	constructor(public div: string, public name: string, public width: number, public height: number, public color?: string) {
	    this.barName = this.name;
	};

   

	appendToGraph()
	{
		this.numBar = bCount;
		bCount++;
		this.numOfElements = document.getElementById(this.div).getElementsByClassName('bar-graph').length;
		var bar = document.createElement("div");
		bar.id = this.name;
		console.log(this.name);
		bar.style.backgroundColor = this.color;
		bar.style.width = "0px";
		bar.style.height = "0px";

		if(this.numOfElements < 1)
		{
			if(!document.getElementById(this.name))
			{
				var scaleX = document.getElementById("scale-x");
				document.getElementById(this.div).insertBefore(bar, scaleX);
				var x = bar.clientHeight;
				bar.className = 'bar-graph';
				bar.style.width = (this.width).toString() + "em";
				bar.style.height = (this.height).toString() + "em";
				bar.style.marginLeft = "1.5em";
			}
			else
			{
				console.log("an element with the id of " + this.name + " already exsits");
			}
		}
		else
		{
			var numOfBars = document.getElementById(this.div).getElementsByClassName("bar-graph").length;
			var lastBar = document.getElementById(this.div).getElementsByClassName("bar-graph")[numOfBars - 1];
			insertAfter(lastBar, bar);
			var x = bar.clientHeight;
			bar.className = 'bar-graph';
			bar.style.width = (this.width).toString() + "em";
			bar.style.height = (this.height).toString() + "em";
		}
	}

	addTitle(input: string, tDiv?: string) 
	{
		var title = document.createElement("span");
		var text = document.createTextNode(input);
		title.className = 'title';
		title.appendChild(text);
		document.getElementById("tWrapper").appendChild(title);
		var left = (this.numBar * 3.65 + 2.85) + "em";
		title.style.left += left;

	}
}

function insertAfter(oldE: HTMLElement, newE: HTMLElement)
{
	console.log(oldE);
	var pElem = oldE.parentNode;
	var nextElem = oldE.nextSibling;
	console.log(nextElem);
	pElem.insertBefore(newE, nextElem);
}