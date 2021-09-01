# TextFlowJS

Text flow js is a script to make text appear as Typing. You can view a simple example of this <a href="https://aswanthabam.github.io/TextFlowJS/">Here</a>

## Usage
Here is the instructions for the Usage

### Using JSDelivr
Use the TextFlowJS script. Using Stylesheet is not mandatory. Stylesheet will be loaded by javascript. Only use if the default styles are not working.

```html
<!-- Stylesheet for TextFlowJS Not recommended this will be automatically loaded by javascript -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css">
<!-- Script for TextFlowJS -->
<script src="https://cdn.jsdelivr.net/gh/aswanthabam/TextFlowJS@main/textWrap.js" type="text/javascript" charset="utf-8">
</script>
```

### Customizing

Change the text color, font size, font family etc.
```js
this.wrapTextColor = "#000000";
this.wrapFontFamily = "Monospace";
this.wrapTextSize = 20; // 20 px
```
Change speed of the TextFlow by the minSpeed and maxSpeed the speed will be randomly obtained within the range.
```js
this.minSpeed = 50; // In milliseconds
this.maxSpeed = 100; // In milliseconds
```
Change cursor background color, width, height etc. Default value of height is the height of the text.
```js
this.cursorHeight = 6; // 6 px (not recommended to set)
this.CursorBackgroundColor = "#000000";
this.cursorWidth = 5; // 5 px
```
Change direction of the text by ```this.dir```
```js
this.dir = "rtl"; // direction from rigth to left
```
Change cursor blinking frequency by ```this.blinkFrequency```(in milliseconds)
```js
this.blinkFrequency = 200; //In milliseconds
```
Change the break point (i.e to stop flow for some time when a character or an index is reached)
```js
this.breakPoint = 5; // Specify string index where to break
this.breakTime = 1000; // Time to break in milliseconds
this.breakKey = "e"; // stop 1 second when 'e' is reached
```