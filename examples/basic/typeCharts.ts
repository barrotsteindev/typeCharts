var bCount = 0; //graph counter
var graphDiv; //the id of the div in which the graph will be 
var height;
var graphMaxY;
 export class barGraph {

    units(numOfUnits: number, maxY: number)
    {

    	//add units to the graph
    	graphMaxY = maxY;
    	var frag = document.createDocumentFragment();
    	graphDiv = document.getElementById(this.div);
    	var scaleY = document.createElement("div");
		scaleY.id = "scale-y";
		scaleY.className = 'scale-y';
		scaleY.style.height = (this.height).toString() + "em";
		var scaleX = document.createElement("div");
		scaleX.id = "scale-x";
		scaleX.className = "scale-x";
		scaleX.style.width = (this.width).toString() + "em";


		var tWrap = document.createElement("div");
		tWrap.id = "tWrapper";
		var numofSpans = numOfUnits;
		var counts = maxY / numofSpans;
		for(var i = 1; i <= numofSpans; i++)
		{
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
		height = parseInt(scaleY.style.height);
		console.log(height);
    }

	constructor(public div: string, public height: number, public width: number) {
	};

}

export class Bar {

	public heightPercentage: number;
	public numBar: number;
	public barName: string;
	public numOfElements: number;

	constructor(public div: string, public name: string, public width: number, public bHeight: number, public color?: string) {
	    this.barName = this.name;
	    this.heightPercentage = (this.bHeight/graphMaxY) * height;
	    console.log(this.heightPercentage);
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
				bar.className = 'bar-graph';
				bar.style.width = (this.width).toString() + "em";
				bar.style.height = (this.heightPercentage).toString() + "em";
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
			bar.style.height = (this.heightPercentage).toString() + "em";
		}
	}

	addTitle(input: string, tDiv?: string) 
	{
		var title = document.createElement("span");
		var text = document.createTextNode(input);
		title.className = 'title';
		title.appendChild(text);
		document.getElementById("tWrapper").appendChild(title);
		var left = (this.numBar * 5 + 1.5) + "em";
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