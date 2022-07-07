// Main class to store the values that might be changed by the user
// This class object is given when calling avcTextWrap function and avcWrapOne
class avcWrap
{
	constructor()
	{
		// ********
		// Not recommmended to change
		//*********
		this.wraps = []; //All avcTextWrap Objects for every Elements
		this.elems = []; // Elements which want to be converted or wrapped
		this.lineHeight = 20; // Line height variable This is the value which is used to fix th eheight of the Curspr
		//***********
		// Recommended variables to be changed
		//***********
		this.blinkFrequency = 1; // Frequency in which to be blinked. (NOt used in this version)
		this.textColor = "#121212"; // COntent text COlor
		this.cursorColor = "#12121250"; // Cursor BAckground COlor
		this.cursorWidth = 7; // Width Of cursor
		this.duration = 2000; // Duration in which the specified Wrap want to be completed
		this.offset = 20; // OFfset in the duration
		this.cursorVisible = true; // IF the cursor want to be visible or not
	}
	// Statrt the wrappimg
	// Duration can be set from here
	start(duration = null)
	{
		if(duration != null) this.duration = duration;
		for(let i = 0;i < this.wraps.length;i++)
		{
			// calls start function of each avcTextWrap
			this.wraps[i].getDurations();
			this.wraps[i].start();
		}
	}
}
// This is the object containing all neccessary functions
class avcTextWrap
{
	constructor(elem)
	{
		this.elem = elem; // Current element
		this.mwrap = null; // Wrap object(avcWrap)
		this.container = null; // The container or span element which is used as a wrap inside the element
		this.text = ""; // TExt of element
		this.counter = 0; // Counter for the purpous to know how much text or index is displayed
		this.minSpeed = 0; // Min transition speed of the text
		this.maxSpeed = 0; // Max transition speed of the text
		
		if(this.elem == null) return 0;
	}
	// Start the wrapping for current element
	start()
	{
		this.text = this.container.textContent; // Collect the text
		// Sets the style variable
		// Thease variables can be changed by changing the corresponding variable
		this.elem.style.setProperty("--avc-textwrap-line-height",this.lineHeight+"px");
		this.elem.style.setProperty("--avc-textwrap-text-color",this.mwrap.textColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-color",this.mwrap.cursorColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-width",this.mwrap.cursorWidth + "px");

		if(!this.mwrap.cursorVisible)
			this.container.classList.add("avc-textwrap-cursor-invisible");
		//	this.current = 10;
		this.container.textContent = ""; // Empty the text
		// the function nexttext to add the next character to wrap is called inside a timeout
		// the timeout is a random between min speed and max speed
		setTimeout(this.nextText,this.getRandom(this),this);
		
	}
	// Function to add new character if have
	nextText(This)
	{
		if(This.counter > This.text.length-1) return; // check if a new character is availabele
		This.container.textContent += This.text[This.counter]; // add the next character
		This.counter += 1; // increment th ecounter the indext of character which want to be viewed the next time
		// Call the same function again in a timeout
		setTimeout(This.nextText, This.getRandom(This),This);
		
	}
	// Get random number b/w min speed and max speed
	getRandom(This){
		return Math.floor(Math.random()*(This.maxSpeed-This.minSpeed+1)) + This.minSpeed;
		
	}
	// Initialize the wrap by crating and styling the elemens needed
	wrap()
	{
		this.text = this.elem.textContent; // Store text
		this.getDurations(); // calculate and store the min and max speed
		this.elem.textContent = "l"; // temperory text used to calculate height of element
		this.lineHeight = this.elem.getBoundingClientRect().height; // get height of element
		this.elem.textContent = ""; // Set the textcontent of element to null
		// Set the style properties
		this.elem.style.setProperty("--avc-textwrap-line-height",this.lineHeight+"px");
		this.elem.style.setProperty("--avc-textwrap-text-color",this.mwrap.textColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-color",this.mwrap.cursorColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-width",this.mwrap.cursorWidth + "px");
	
		this.elem.classList.add(".avc-textwrap-container");
		
		this.container = document.createElement("span"); // create a wrap element span
		
		if(!this.mwrap.cursorVisible)
			this.container.classList.add("avc-textwrap-cursor-invisible"); // hide the cursor
		this.container.classList.add("avc-textwrap-text-container");
		
		this.container.textContent = this.text;
	
		this.elem.appendChild(this.container); // append span element to element
		
	}
	// Get th min and max speed from the duration
	getDurations(text = null)
	{
		if(text == null) text = this.text;
		this.minSpeed = this.mwrap.duration/(text.length*1.0) - this.mwrap.offset;
		this.maxSpeed = this.minSpeed + this.mwrap.offset;
	}
}

// Wrap all elements
// call this function to wrap all elenents contining the class name "texter"
function avcWrapAll()
{
	wrap = new avcWrap(); // Avc wrap element
	wrap.root = document.querySelector(":root"); // Not used currently
	wrap.elems = document.getElementsByClassName("texter"); // GEt all element containiing the texter class name
	wrap.wraps = [];
	for(i = 0;i < wrap.elems.length;i++)
	{
		// looop and apply and initiallize the wraps
		m = new avcTextWrap(wrap.elems[i]);
		m.mwrap = wrap;
		wrap.wraps[i] = m;
		m.wrap(); // initializing styles
	}
	return wrap;
}
// wrap one elment
// can pass a element as a parametre or a number
// if number the numbrer'th element will be used to wrap
// if no paramente is passed the firest elelment will be used
function avcWrapOne(elem = null)
{
	wrap = new avcWrap();
	wrap.root = document.querySelector(":root");
	if(elem == null){
		// Default clause no value passed
		try{
			wrap.elems = document.getElementsByClassName("texter");
		}
		catch(e){
			console.log("No element with classname");
			return null;
		}
	}
	else{
		// value passed
		if (typeof(elem) == 'number'){
			// number
			// try if a element with the name exit or not
			try{
				wrap.elems = [document.getElementsByClassName("texter")[elem]];
			}
			catch(e){
				console.log("No element found");
				return null;
			}
		} 
		else{
			// The element may be the passed argument or value
			wrap.elems = [elem];
		}
	}
	// Applly wrap for the element
	wrap.wraps = [];
	m = new avcTextWrap(wrap.elems[0]);
	m.mwrap = wrap;
	wrap.wraps[0] = m;
	m.wrap();
	return wrap;
}