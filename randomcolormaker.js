/*
Prints 10 random colors to the screen on the form of <div>
*/

var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = "rgb("; //Adds rgb(
  color += randomRGB() + ","; //Adds random color value 1
  color += randomRGB() + ","; //Adds random color value 2
  color += randomRGB() + ")"; //Adds random color value 3 
  return color //Returns RGB value for the color rgb(x,x,x)
}

function print(message) {
  document.write(message);
}

for (var i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);

/*Make sure to include the call on the .html file to run the .js file // <script src="randomcolormaker.js"></script> */
/* CSS
@import url('http://necolas.github.io/normalize.css/3.0.2/normalize.css');

/*General*/
body {
  background: #fff;
  max-width: 980px;
  margin: 50px auto;
  padding: 0 20px;
  font: Helvetica Neue, Helvectica, Arial, serif;
  font-weight: 300;
  font-size: 1em;
  line-height: 1.5em;
  color: #8d9aa5;
}

a {
  color: #3f8aBf;
  text-decoration: none;
}

a:hover {
  color: #3079ab;
}

a:visited {
  color: #5a6772;
}

h1, h2, h3 {
  font-weight: 500;
  color: #384047;
}

h1 {
  font-size: 1.8em;
  margin: 60px 0 40px;
}

h2 {
    font-size: 1em;
    font-weight: 300;
    margin: 0;
    padding: 10px 0 30px 0;
}

#home h2 {
  margin: -40px 0 0;
}

h3 {
  font-size: .9em;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

h3 em {
  font-style: normal;
  font-weight: 300;
  margin: 0 0 10px 5px;
  padding: 0;
  color: #8d9aa5;
}

ol {
  margin: 0 0 20px 32px;
  padding: 0;
}

#home ol {
  list-style-type: none;
  margin: 0 0 40px 0;
}

li {
  padding: 8px 0;
  display: list-item;
  width: 100%;
  margin: 0;
  counter-increment: step-counter;
}

#home li::before {
    content: counter(step-counter);
    font-size: .65em;
    color: #fff;
    font-weight: 300;
    padding: 2px 6px;
    margin:  0 18px 0 0;
    border-radius: 3px;
    background:#8d9aa5;
    line-height: 1em;
}

.lens {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #8d9aa5;
  border-radius: 5px;
  position: absolute;
  margin: 5px 0 0 -19px;
}

#color div {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
  margin: 5px;
}

span {
  color: red;
}
*/
