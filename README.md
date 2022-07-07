# TextFlowJS
 
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/aswanthabam) [![ABAM](https://badgen.net/badge/ABAM/view/)](https://abam.herokuapp.com/projects/TextFlowJS)

Text flow js is a script to make text appear as Typing. You can view a simple example of this <a href="https://avc-tech.github.io/TextFlowJS/">Here</a>

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
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css">
        <title>Text Flow JS</title>

        <!-- TextFlowJS StyleSheet -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/avc-tech/TextFlowJS@1.0.2/style.css">
        <!-- Script for TextFlowJS -->
        <script src="https://cdn.jsdelivr.net/gh/avc-tech/TextFlowJS@1.0.2/textWrap.js" type="text/javascript" charset="utf-8"></script>
        
        <style>
            body{
                background: white;
                color: black;
            }a{
                color: black;
                font-family: Monospace;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
       <!-- Creating elements and giving className "texter" for the elements which need that effect -->
        <h1 class="texter">Hello everyone welcome to TextFlowJS by Aswanth V C. this is an example of the output of using TextFlowJS</h1>
        <!-- You can use this effect for more than once -->
        <p class="texter">You can use more than once</p>
        <br/>
        <!-- and it's easy to individually load additional languages -->
        <script>hljs.highlightAll();</script>
		<script>
            // Wrap the first element 
			obj1 = avcWrapOne(0);
            // Set styles
			obj1.textColor = "#ff0000"; // Text Color
			obj1.cursorColor = "#121212"; //Cursor COlor
			obj1.cursorWidth = 7; //cursor width
			obj1.cursorVisible = true; // if want the cursor to be visible or not
			obj1.start(7000); // Start the animation and it would be completed in almost 7second (the time may warry because random is used)
			avcWrapOne(1).start(2000); // start the animation for the second element (duration = 2seconds)
		</script>
    </body>
</html>

```

### New with 1.0.2 
1) We just fixed some bug and improved the smoothness. customisation in this version is lower if you want more customisation use the 1.0.1 release.