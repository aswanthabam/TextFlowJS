this.SetClassName = "texter"; //change default class name

// Getting the classes if exists
this.texter = document.getElementsByClassName(this.SetClassName);
// Creating the new elemnts and setting id
cursor = document.createElement("p");
cursor.id = "abamCursor1";
this.container = document.createElement("div");
this.container.id = "abamContainer1";
this.textContainer = document.createElement("span");
this.textContainer.id = "abamtextContainer1";
// Adding the stylsheet to header
var link = document.createElement('link');
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/style.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);
// Declaring loopable and content variables
this.content;
this.i= 0; this.m = 0;
// Screen width
this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
this.finished = false;
// Some variables which store the styling details about the code these can be changed from outside of the code to customize
this.cursorHeight = null;
this.blinkFrequency = 200;
this.dir = "";
this.minSpeed = 50;
this.maxSpeed = 100;
this.breakPoint = null;
this.breakTime = 1000;
this.breakKey = null;
this.wrapTextColor = "#000000";
this.CursorBackgroundColor = "#000000";
this.cursorWidth = 5;
this.wrapTextSize = null;
// Starting wrapper you can give text and element variables(optional) if not given it will be used from the className "texter"
function setWrap(text = null,elem = null) {
        if(elem == null){
            elem = texter[0];
            if (elem == undefined){
                return 0;
            }
        }
        if(this.wrapTextSize == null){
            this.wrapTextSize = elem.getBoundingClientRect().height;
        }
        elem.style.direction = this.dir;
        this.cursor.style.width = this.cursorWidth + "px";
        if(this.cursorHeight != null){
            this.cursor.style.height = this.cursorHeight + "px";
        }else{
            this.cursor.style.height = this.wrapTextSize + "px";
        }
        console.log("Cursor Height: "+this.cursorHeight);
        
        this.cursor.style.background = this.CursorBackgroundColor;
        
        this.container.width = "100%";
        this.container.style.display = "inline-block";
        this.textContainer.style.direction = this.dir;
        this.textContainer.style.color = this.wrapTextColor;
        this.textContainer.style.fontSize = this.wrapTextSize + "px";
        this.container.appendChild(this.textContainer);
        this.container.appendChild(this.cursor);
        this.content = elem.textContent;
        elem.textContent = "";
        elem.appendChild(this.container);
        this.elem2 = elem;
        this.elem = this.textContainer;
        
        if (text != null && String(text).length > 1){
            this.content = text;
        }
        this.elem.textContent = "";
        this.counter = this.getRandom(this.minSpeed,this.maxSpeed);
        this.i = 0;
        this.myvar = setTimeout(this.setTextAbamTech,this.counter);
        this.blinker = setTimeout(this.blinkCursor,this.blinkFrequency);
    
    return 0;
}
function multi(text){
    if(this.texter.length > 1){
        console.log("Cant place more than 1 class at the same time.\nHint:  Please use setWrap(text,element) for each element");
        return 0;
    }
    for(var i = 0;i<this.texter.length;i++){
       setWrap(text,this.texter[i]);
    }
}
function blinkCursor(){
    if (this.m > 0){
        this.cursor.style.opacity = "0";
        this.m = 0;
        this.blinker = setTimeout(this.blinkCursor,this.blinkFrequency);
    }else{
        this.cursor.style.opacity = "1";
        this.m = 1;
        this.blinker = setTimeout(this.blinkCursor,this.blinkFrequency);
    }
}
function getRandom(start,end){
    return Math.floor(Math.random()*(end-start+1)) + start;
}
function setTextAbamTech(){
    this.elem.innerHTML = this.elem.textContent + '<span id="lastKeyAbam">'+this.content[this.i]+"</span>";
    px = document.getElementById("lastKeyAbam");
    this.cursor.style.top = px.getBoundingClientRect().top - this.cursorHeight + "px";
    px = document.getElementById("lastKeyAbam");
    
    this.cursor.style.left = px.getBoundingClientRect().left + px.getBoundingClientRect().width + "px";
    this.i++;
    
    if (this.i < this.content.length){
        this.counter = this.getRandom(this.minSpeed,this.maxSpeed);
        if((this.breakPoint != null && i == breakPoint) || (this.breakKey != null && this.content[i - 1] == this.breakKey)){
            setTimeout(this.setTextAbamTech,this.breakTime);
        }
        else{
            setTimeout(this.setTextAbamTech,this.counter);
        }
    }else{
        finished = true;
    }
}