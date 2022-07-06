function initWrap(text = null,elem = null,WorkingWith = 0){
    if(text != null) this.currentText = text;
    else this.currentText = null;
    if(elem != null) this.currentElement = elem;
    else this.currentElement = null;
    this.SetClassName = "texter";
    //change default class name
    
    // Getting the classes if exists
    this.texter = document.getElementsByClassName(this.SetClassName);
    // Creating the new elemnts and setting id
    this.cursor = document.createElement("p");
    this.cursor.className += "abamCursor1";
    this.container = document.createElement("div");
    this.container.className += "abamContainer1";
    this.textContainer = document.createElement("span");
    this.textContainer.className += "abamtextContainer1";
    // For multiple work counting
    this.multiI = WorkingWith;
    // Adding the stylsheet to header
    var link = document.createElement('link');
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = 'https://cdn.jsdelivr.net/gh/avc-tech/TextFlowJS@main/style.js';
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
    this.wrapFontFamily = null;
    this.cursorWidth = 5;
    this.wrapTextSize = null;
    if(this.currentElement == null)
        this.Elements = this.fetchElements();
}
// Starting wrapper you can give text and element variables(optional) if not given it will be used from the className "texter"
initWrap.prototype.setWrap = function(text = null,elem = null) {
    if(text == null && this.currentText != null) text = this.currentText;
    if(this.currentElement != null) elem = this.currentElement;
        if(elem == null){
            this.multi();
        }else{
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
        this.cursor.style.background = this.CursorBackgroundColor;
        
        this.container.width = "100%";
        this.container.style.display = "inline-block";
        this.textContainer.style.direction = this.dir;
        this.textContainer.style.color = this.wrapTextColor;
        this.textContainer.style.fontSize = this.wrapTextSize + "px";
        this.textContainer.style.fontFamily = this.wrapFontFamily;
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
        this.myvar = setTimeout(this.setTextAbamTech,this.counter,this);
        this.blinker = setTimeout(this.blinkCursor,this.blinkFrequency,this);
        }
    return 0;
};
initWrap.prototype.fetchElements = function(){
    m = [];
    for(var i = 0;i<this.texter.length;i++){
       newObj = new initWrap(null,this.texter[i],i+1);
       
       m.push(newObj);
    }
    return m;
};
initWrap.prototype.multi = function(){
    if(this.Elements.length == 1){
        console.log(this.cloneWrap(this.Elements[0],this));
        this.Elements[0].setWrap();

    }else{
    for(var i = 0;i<this.Elements.length ;i++){
       console.log(this.cloneWrap(this.Elements[i],this));
       this.Elements[i].setWrap();
    }}
    return this.Elements;
};
initWrap.prototype.cloneWrap = function(c1,c2){
    c1.cursorHeight = c2.cursorHeight;
    c1.blinkFrequency = c2.blinkFrequency;
    c1.dir = c2.dir;
    c1.minSpeed = c2.minSpeed;
    c1.maxSpeed = c2.maxSpeed;
    c1.breakPoint = c2.breakPoint;
    c1.breakTime = c2.breakTime;
    c1.breakKey = c2.breakKey;
    c1.wrapTextColor = c2.wrapTextColor;
    c1.CursorBackgroundColor = c2.CursorBackgroundColor;
    c1.wrapFontFamily = c2.wrapFontFamily;
    c1.cursorWidth = c2.cursorWidth;
    c1.wrapTextSize = c2.wrapTextSize;
    c1.cursor.style.position = "absolute";
    if(c1.wrapTextSize == null){
        c1.wrapTextSize = c1.getBoundingClientRect().height;
    }
    if(c1.cursorHeight == null){
        c1.cursorHeight = c2.wrapTextSize;
    }
    return c1;
}
initWrap.prototype.blinkCursor = function(This){
    if (This.m > 0){
        This.cursor.style.opacity = "0";
        This.m = 0;
        This.blinker = setTimeout(This.blinkCursor,This.blinkFrequency,This);
    }else{
        This.cursor.style.opacity = "1";
        This.m = 1;
        This.blinker = setTimeout(This.blinkCursor,This.blinkFrequency,This);
    }
};
initWrap.prototype.getRandom = function(start,end){
    return Math.floor(Math.random()*(end-start+1)) + start;
};
initWrap.prototype.setTextAbamTech = function(This){
    This.elem.innerHTML = This.elem.textContent + '<span id="lastKeyAbam'+This.multiI+'" style="margin-right:20px;">'+This.content[This.i]+"</span>";
    px = document.getElementById("lastKeyAbam"+This.multiI);
    
    This.cursor.style.top = px.getBoundingClientRect().top  + "px";
    This.cursor.style.left = px.getBoundingClientRect().left + px.getBoundingClientRect().width + "px";
    This.i++;
    
    if (This.i < This.content.length){
        This.counter = This.getRandom(This.minSpeed,This.maxSpeed);
        if((This.breakPoint != null && i == breakPoint) || (This.breakKey != null && This.content[i - 1] == This.breakKey)){
            setTimeout(This.setTextAbamTech,This.breakTime,This);
        }
        else{
            setTimeout(This.setTextAbamTech,This.counter,This);
        }
    }else{
        finished = true;
    }
};