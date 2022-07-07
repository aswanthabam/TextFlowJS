# TextFlowJS
 
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/aswanthabam) [![ABAM](https://badgen.net/badge/ABAM/view/)](https://abam.herokuapp.com/projects/TextFlowJS)

Text flow js is a script to make text appear as Typing. You can view a simple example of this <a href="https://aswanthabam.github.io/TextFlowJS/">Here</a>

## Usage
Here is the instructions for the Usage

### Using JSDelivr

Use the TextFlowJS Java Script and CSS 

```html
<!-- TextFlowJS StyleSheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/avc-tech/TextFlowJS@1.0.2/style.css">
<!-- Script for TextFlowJS -->
<script src="https://cdn.jsdelivr.net/gh/avc-tech/TextFlowJS@1.0.2/textWrap.js" type="text/javascript" charset="utf-8">
</script>
```
Add class name "texter" to the elements to which you want to add the TextFlowJS. Then create a new wrap by ```obj = avcWrapAll()``` or ```obj = avcWrapOne(elem)```. This will return a ```avcWrap``` object on which you can customize the colors ,width etc. and start the text transition.
Here is a basic model of the script you want to call. We recommend to add these script to the end of the ```body```. 

#### Wraping all elements with Class Name "texter"

```html
<script>
    // Wrap all elements with the className texter
    // Return avcWrap object store this for customisation and for beggining transition.
    Obj = avcWrapAll();
    // Call the start function to start the transition.
    // You can pass the duration as a parameter
    Obj.start(2000); // 2 second duration
</script>
```
#### Wraping one element
You can use the ```avcWrapOne(elem)``` function to wrap only one element. You can pass the element as the parameter or the index of that element (strting from 0) or leave it blank to automatically wrap the first element.
```html
<script>
    // Wrap one element
    // Return avcWrap object store this for customisation and for beggining transition.
    
    // Passing the element as a parameter
    elem = document.querySelector("#your-element");
    Obj = avcWrapOne(elem);
    
    // Passing index as parameter
    Obj = avcWrapOne(0);
    
    // Noting passing automatically wrap the first element
    Obj = avcWrapOne();
    
    // Call the start function to start the transition.
    // You can pass the duration as a parameter
    Obj.start(2000); // 2 second duration
</script>
```
Note : If you want to change the default class name ("texter"). you can pass the new class name as the first argument for the ```avcWrapAll("yourclassname")``` or the second argument of ```avcWrapOne(elem,"yourclassname")```
### Customizing
All customisation can be done by the ```avcWrap``` instance which is returned when calling the function. You can also customize more by changing the css attributes and variables.

More customisation can be done by the css of your element itself. We only recommend you to change the values which are created by us. Like the cursor width, color etc.
 ##### Change the text color and cursor color
```js
obj.textColor = "#12121270";
obj.cursorColor = "#121212";
```
##### Change the cursor dimensions
```js
obj.cursorWidth = 7;
obj.cursorVisible = false; // make cursor invisible
```
##### Change the duration of animation
```js
obj.duration = 3000; // you can also pass this as a attribute in the obj.start() method
obj.offset = 40; // offset
```
Offset is the value by which range the duration can be vary. Transition speed of the text will be a random number between the ```duration-offset``` and ```duration+offset```. This done for a smooth transition of text.

### CSS customization

You can customize the css attributes also: 
```css
.avc-textwrap-container{
    /*
    Customize styles for your element by '.avc-textwrap-container'. Some time you want to use '!important' to change default values
    */
}
.avc-textwrap-text-container{
    /*
    Customize styles for the span element containing the text by 'avc-textwrap-text-container'. Some time you want to use '!important' to change default values
    */
}
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
1) We just fixed some bug and improved the smoothness. customisation in this version is lower if you want more customisation use the 1.0.1 release.