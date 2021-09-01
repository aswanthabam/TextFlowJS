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
Then use ```setWrap()``` in your script. You can give the text and elements as arguments if needed. By default the text and elem will be taken from the element with "texter" class name. You can customize this class in your java script.
```html
<script>
    setWrap(text = null,elem = null); // start text flow
</script>
```

### Customizing
All customisation want to be done before calling ```setWrap()```

Change the text color, font size, font family etc.
```js
this.wrapTextColor = "#000000";
this.wrapFontFamily = "Monospace";
this.wrapTextSize = 20; // 20 px
```
Change speed of the TextFlow by using ```this.minSpeed``` and ```this.maxSpeed```. the speed will be randomly obtained within the range.
```js
this.minSpeed = 50; // In milliseconds
this.maxSpeed = 100; // In milliseconds
```
Change cursor background color, width, height etc. Default value of height is the height of the text(i.e font size).
```js
this.cursorHeight = 6; // 6 px (not recommended to set)
this.CursorBackgroundColor = "#000000";
this.cursorWidth = 5; // 5 px
```
Change the default class name
```js
this.setClassName = "texter2";
```
Change direction of the text by ```this.dir```.
```js
this.dir = "rtl"; // direction from rigth to left
```
Change cursor blinking frequency by ```this.blinkFrequency```.(in milliseconds)
```js
this.blinkFrequency = 200; //In milliseconds
```
Change the break point (i.e to stop flow for some time when a character or an index is reached)
```js
this.breakPoint = 5; // Specify string index where to break
this.breakTime = 1000; // Time to break in milliseconds
this.breakKey = "e"; // stop 1 second when 'e' is reached
```

### Example Code

```html

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="" content="">
        <!-- Default styles for TextFlowJS not recommended styles will be automatically loaded by JavaScript -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/style.css"/>
        <title>Text Flow JS</title>
        <style>
            body{
                background: black;
                color:white;
            }a{
                text-decoration: none;
            }
        </style>
    </head>
    <body>
    <!-- The element which want the effect -->
    <!-- The class of the element is 'texter' you can change it by JavaScript -->
    <p id="texter" style="font-size:30px;" class="texter">Hello everyone welcome to TextFlowJS by Aswanth V C. this is an example of the output of using TextFlowJS</p>
        <br/>
        <a href="https://github.com/aswanthabam/TextFlowJS/">View More In GitHub</a>
        <br/>
        <a href="https://github.com/aswanthabam/TextFlowJS/">View Documentation</a>
        <!-- TextFlowJS Script -->
          <script src="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/textWrap.js" type="text/javascript" charset="utf-8">
        </script>
        <!-- Script for the page -->
        <script>
        <!-- Change text size -->
            this.wrapTextSize = 20;
            <!-- Change Text Color -->
            this.wrapTextColor = "#aed7d6";
            <!-- Change cursor blinking frequency -->
            this.blinkFrequency = 500;
            <!-- Change cursor color -->
            this.CursorBackgroundColor = "#f6f6f7";
            <!-- Change Font family -->
            this.wrapFontFamily = "Monospace";
            <!-- Start wrapping you can give text and element as arguments -->
            <!-- Automatically get the element and text from the class -->
            <!-- Syntex "setWrap(text = null,elem = null);" -->
            setWrap();
        </script>
    </body>
</html>
```

### Known Issues

1) Cant use Text Flow for more than one element.