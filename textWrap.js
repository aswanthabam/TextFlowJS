class avcWrap
{
	constructor()
	{
		this.wraps = [];
		this.elems = [];
		this.lineHeight = 20;
		// Recommended variables to be changed
		this.blinkFrequency = 1;
		this.textColor = "#121212";
		this.cursorColor = "#12121250";
		this.cursorWidth = 7;
		this.duration = 2000;
		this.offset = 20;
		this.cursorVisible = true;
	}
	start(duration = null)
	{
		if(duration != null) this.duration = duration;
		for(let i = 0;i < this.wraps.length;i++)
		{
			this.wraps[i].getDurations();
			this.wraps[i].start();
		}
	}
}
class avcTextWrap
{
	constructor(elem)
	{
		this.elem = elem;
		this.mwrap = null;
		this.container = null;
		this.text = "";
		this.counter = 0;
		this.minSpeed = 0;
		this.maxSpeed = 0;
		
		if(this.elem == null) return 0;
	}
	start()
	{
		this.text = this.container.textContent;
		this.elem.style.setProperty("--avc-textwrap-line-height",this.lineHeight+"px");
		this.elem.style.setProperty("--avc-textwrap-text-color",this.mwrap.textColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-color",this.mwrap.cursorColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-width",this.mwrap.cursorWidth + "px");
		if(!this.mwrap.cursorVisible)
			this.container.classList.add("avc-textwrap-cursor-invisible");
		//	this.current = 10;
		this.container.textContent = "";
		setTimeout(this.nextText,this.getRandom(this),this);
		
	}
	nextText(This)
	{
		if(This.counter > This.text.length-1) return;
		This.container.textContent += This.text[This.counter];
		This.counter += 1;
		setTimeout(This.nextText, This.getRandom(This),This);
		
	}
	getRandom(This){
		return Math.floor(Math.random()*(This.maxSpeed-This.minSpeed+1)) + This.minSpeed;
		
	}
	wrap()
	{
		this.text = this.elem.textContent;
		this.getDurations();
		this.elem.textContent = "l";
		this.lineHeight = this.elem.getBoundingClientRect().height;
		this.elem.textContent = "";
		this.elem.style.setProperty("--avc-textwrap-line-height",this.lineHeight+"px");
		this.elem.style.setProperty("--avc-textwrap-text-color",this.mwrap.textColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-color",this.mwrap.cursorColor);
		this.elem.style.setProperty("--avc-textwrap-cursor-width",this.mwrap.cursorWidth + "px");
	
		this.elem.classList.add(".avc-textwrap-container");
		
		this.container = document.createElement("span");
		
		if(!this.mwrap.cursorVisible)
			this.container.classList.add("avc-textwrap-cursor-invisible");
		this.container.classList.add("avc-textwrap-text-container");
		
		this.container.textContent = this.text;
	
		this.elem.appendChild(this.container);
		
	}
	getDurations(text = null)
	{
		if(text == null) text = this.text;
		this.minSpeed = this.mwrap.duration/(text.length*1.0) - this.mwrap.offset;
		this.maxSpeed = this.minSpeed + this.mwrap.offset;
	}
}

function avcWrapAll()
{
	wrap = new avcWrap();
	wrap.root = document.querySelector(":root");
	wrap.elems = document.getElementsByClassName("texter");
	wrap.wraps = [];
	for(i = 0;i < wrap.elems.length;i++)
	{
		m = new avcTextWrap(wrap.elems[i]);
		m.mwrap = wrap;
		wrap.wraps[i] = m;
		m.wrap();
	}
	return wrap;
}

function avcWrapOne(elem = null)
{
	wrap = new avcWrap();
	wrap.root = document.querySelector(":root");
	if(elem == null){
		try{
			wrap.elems = document.getElementsByClassName("texter");
		}
		catch(e){
			console.log("No element with classname");
			return null;
		}
	}
	else{
		if (typeof(elem) == 'number'){
			try{
				wrap.elems = [document.getElementsByClassName("texter")[elem]];
				
			}
			catch(e){
				console.log("No element found");
				return null;
			}
		} 
		else{
			wrap.elems = [elem];
		}
	}
	wrap.wraps = [];
	m = new avcTextWrap(wrap.elems[0]);
	m.mwrap = wrap;
	wrap.wraps[0] = m;
	m.wrap();
	return wrap;
}