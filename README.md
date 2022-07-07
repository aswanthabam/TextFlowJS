# TextFlowJS
 
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/aswanthabam) [![ABAM](https://badgen.net/badge/ABAM/view/)](https://abam.herokuapp.com/projects/TextFlowJS)

Text flow js is a script to make text appear as Typing. You can view a simple example of this <a href="https://aswanthabam.github.io/TextFlowJS/">Here</a>

## Usage
Here is the instructions for the Usage

### Using JSDelivr
Use the TextFlowJS script from . Using Stylesheet is not mandatory because Stylesheet will be loaded by javascript. Only use Stylesheet if the default styles are not working.

```html
<!-- Stylesheet for TextFlowJS Not recommended this will be automatically loaded by javascript -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/style.css">
<!-- Script for TextFlowJS -->
<script src="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/textWrap.js" type="text/javascript" charset="utf-8">
</script>
```
Then create a new wrap by ```obj = new initWrap()``` in your script. You can give the text and element as arguments if needed. By default the text and elem will be taken from the element with "texter" class name. You can customize this class in your java script.
```html
<script>
    Obj = new initWrap(text = null,elem = null,WorkingWith = 0);
    // Create new TextFlow
    // optional arguments text (text to flow), elem (element) and WorkingWith (If have more than one element with className you can init only for one element by the number of element)
</script>
```

### Customizing
All customisation want to be done after creating object  ```initWrap()```

Change the text color, font size, font family etc.
```js
obj.wrapTextColor = "#000000";
obj.wrapFontFamily = "Monospace";
obj.wrapTextSize = 20; // 20 px
```
Change speed of the TextFlow by using ```obj.minSpeed``` and ```obj.maxSpeed```. the speed will be randomly obtained within the range.
```js
obj.minSpeed = 50; // In milliseconds
obj.maxSpeed = 100; // In milliseconds
```
Change cursor background color, width, height etc. Default value of height is the height of the text(i.e font size).
```js
obj.cursorHeight = 6; // 6 px (not recommended to set)
obj.CursorBackgroundColor = "#000000";
obj.cursorWidth = 5; // 5 px
```
Change the default class name
```js
obj.setClassName = "texter2";
```
Change direction of the text by ```obj.dir```.
```js
obj.dir = "rtl"; // direction from rigth to left
```
Change cursor blinking frequency by ```obj.blinkFrequency```.(in milliseconds)
```js
obj.blinkFrequency = 200; //In milliseconds
```
Change the break point (i.e to stop flow for some time when a character or an index is reached)
```js
obj.breakPoint = 5; // Specify string index where to break
obj.breakTime = 1000; // Time to break in milliseconds
obj.breakKey = "e"; // stop 1 second when 'e' is reached
```
Get Array of all elements using the className by ```obj.Elements```. You can customise every element like below:
```js
obj.Elements[0].wrapTextColor = "red";
// Change the text color of first element with className using this.
```
### CSS customization

You can customize the css attributes also: 
```css
.abamCursor1{
    /*
    Customize styles for the cursor by '#abamCursor1'. Some time you want to use '!important' to change default values
    */
}
.abamtextContainer1{
    /*
    Customize styles for the span element containing the text by '#abamtextContainer1'. Some time you want to use '!important' to change default values
    */
}
.abamContainer1{
    /*
    Customize styles for the div containing text and cursor by '#abamContainer1'. Some time you want to use '!important' to change default values
    */
}
```

### Structure
The text inside your elemnt will be converted to this form to make the text flow correctly.
```html
<div class="abamContainer1">
    <span class="abamtextContainer1">
        <!-- Your text content will go here -->
    </span>
    <p class="abamCursor1">
        <!-- This is the cursor element -->
    </p>
</div>
```

### Example Code

```html

<!-- Example Project of TextFlowJS made by Aswanth Vc -->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="" content="">
        <title>Text Flow JS</title>
        <!-- default styles for TextFlowJS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/style.css">
        <!-- TextFlowJS -->
        <script src="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/textWrap.js" type="text/javascript" charset="utf-8">
        </script>
        <style>
            body{
                background: black;
                color:white;
            }a{
                color: white;
                font-family: Monospace;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
       <!-- Creating elements and giving className "texter" for the elements which need that effect -->
        <p class="texter">Hello everyone welcome to TextFlowJS by Aswanth V C. this is an example of the output of using TextFlowJS</p>
        <!-- You can use this effect for more than once -->
        <p class="texter">You can use more than once</p>
        <br/>
        <a href="https://github.com/aswanthabam/TextFlowJS/">View More In GitHub</a>
        <br/>
        <a href="https://abam.herokuapp.com/projects/TextFlowJS/">View Documentation</a>
        <script>
            // creaing a new wrap
            obj = new initWrap();
            // Setting textSize
            obj.wrapTextSize = 20;
            // Setting font family
            obj.wrapFontFamily = "Monospace";
            // Setting textColor
            obj.wrapTextColor = "#aed7d6";
            // Setting text direction
            obj.dir = "ltr";
            // Setting cursor blonk frequency
            obj.blinkFrequency = 500;
            // Setting Cursor background color
            obj.CursorBackgroundColor = "#f6f6f7";
            // Initializing element
            obj.setWrap();
            // If you want to set different styles for different elements
            // You can call 'obj.Elements' This will return an array of all elements
            // Customize it like this
            // obj.Elements[0].CursorBackgroundColor = "#562626";
        </script>
    </body>
</html>

```

### New with 1.0.2 
1) In this versio  you can use effect for more than one element