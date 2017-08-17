/**
 *
 * @author robiriondo
 * Description
 * JavaScript Tutorial - v1.0
 **/

//Pre-requisites basics of programming or introduction to computer/machine learning
/*Assuming that you know that basics of programming, this
tutorial will mostly go through methods, functions and examples.
Declare simple variables:
var string = "I like tacos.;"
var number = 8;
var boolean = true;*/

//1. Print strings, numbers and booleans to the screen

console.log("The cat was hungry"); //String
console.log(1) //Number
console.log(true) //Boolean
console.log("ramon","perez") //String, double string

//2. Use Calculations on .js

console.log(2+5);
console.log(5-2);
console.log(20/10);
console.log(10*30);
console.log(0.3%30);//Modulus

//3. Math method

console.log(Math.random());//Prints a number between 0 and 1
console.log(Math.random()*50);//Prints a number between 0 and 50
console.log(Math.floor(Math.random()*50);//Prints out a number with Math.random and Math.floor rounds it up

/*4. Comments - Comments are lines in code that are not "run/executed"
their purpose is to help humans understand the written code
Single line comments are defined by: // at the start of your comment
Multi line comments are defined by /* and end in */

//Openning line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

/*5. Variables
camelCase is used when assigned variables, first world all in lower case, and second word only the first
letter is capital followed by all lowercase*/

var strength = '50,000 pounds';
console.log('How much stuff can a variable hold? ', strength);
// Output: strength

var strength = '50,000 pounds';
var age = 26;
var hasPet = true;
console.log(age);
console.log(hasPet);

/*6. Changing a variable's value */

var morningAlarm = '6:30 AM';
morningAlarm = '5:00 AM';

console.log('Morning alarm is set to ', morningAlarm);
// Output: '5:00 AM'

/*7. String Interpolation*/

var favoriteAnimal = "puppies";
console.log('My favorite animal: ' + favoriteAnimal + '.');
// Output: 'I own a pet armadillo.'

/*console.log("My favorite animals are: ", favAnimal);
favoriteAnimal = "puppies";
console.log("My favorite animals are: ", favoriteAnimal);*/
/*
var myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.' */

/*8. If else statements */
var harryPotterFan = true;
if (harryPotterFan) {
    console.log('Mischief managed.');
} else {
    console.log('I lead a muggle\'s life.');
}

/*9. Comparison Operators
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
*/

//This program compares a variable and uses an if statement to run a script.
var hungerLevel = 5;

if (hungerLevel == 7) {
    console.log('Time to eat!');
} else {
    console.log('Let\'s eat later.');
}

/*10. Comparison Operators II
Contains > use ==
For equals > use ===
Do not equal > use !==
*/

var moonPhase = "full";
if (moonPhase === "full") {
    console.log("Howwwwlll!!");
		}
else {
  	('	I swear I am not a werewolf...');
}

/*11.
else if statements
*/

var moonPhase = "solar eclipse";
if (moonPhase === "full") {
    console.log("Howwwwlll!!");
}
else if (moonPhase === "mostly full") {
  	 console.log("Arms and legs are getting haririer");
}
else if (moonPhase === "mostly new") {
  	 console.log("Back on two feet");
}
else {
  	console.log("Invalid moon phase");
}

/*12. Logical Operators
To say "both must be true," we can use &&.
To say "either can be true," we can use ||.
To say "I want to make sure this is the opposite of what it really is," we can use !.
To say "these should not be equal to each other," we can use !==.
*/

var moonPhase = "full";
var foggyNight = true;
if (moonPhase === 'full' || foggyNight === true) { //or
    console.log("Howwwwlll!!");
}
else if (moonPhase === "mostly full") {
  	 console.log("Arms and legs are getting haririer");
}
else if (moonPhase === "mostly new") {
  	 console.log("Back on two feet");
}
else {
  	console.log("Invalid moon phase");
}
var moonPhase = "full";
var foggyNight = true;
if (moonPhase === 'full' && foggyNight === true) { //and
    console.log("Howwwwlll!!");
}
else if (moonPhase === "mostly full") {
  	 console.log("Arms and legs are getting hairier");
}
else if (moonPhase === "mostly new") {
  	 console.log("Back on two feet");
}
else {
  	console.log("Invalid moon phase");
}
/*13. The switch keyword initiates the statement, and is followed by ( ... ),
which contains the condition that each case will compare to. In the example,
the condition is moonPhase.
Inside the block, { ... }, there are cases.
A case is like the else if part of an if/else if/else statement.
The word following the first case is 'full'. If moonPhase equalled 'tomato', that case's console.log would run.
*/

var moonPhase = "full";
//var foggyNight = true;
switch (moonPhase) {
  case 'full':
    console.log('Howwwwlll!!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}

/*14. Summary of Operators:
omparison operators, like <, >, <=, and >= can compare two variables. After they compare, they always return either true or false.
Logical Operators, like &&, ||, !==, and !, can compare two variables to see if a certain condition exists:
&& checks if both sides are true.
|| checks if either side is true.
!== checks if both sides are not equal.
! changes a variable that is true to false, and vice versa.
*/

/*15. Intro to Functions
The following program is a simple function to order pizza.*/

var pizza = false;

function takeOrder() {
  console.log('order: ', pizza);
}

takeOrder();

// - Parameters:
//Interpolate a string and add a parameter to the function
//parameter = topping
//interpolation is made by adding the string of 'topped with bacon.' to the function takeOrder

var pizza = "pizza";
//var topping = ' topped with bacon.'

function takeOrder(topping) {
  //console.log('order: ', pizza);
  console.log('order: '+ pizza +' topped with '+topping +"")
}

takeOrder('bacon');//Make sure to call your parameter when using the function
//The parameter must be called in order for the function to work correctly.

//Parameters II
//Simple remainder function:
function getRemainder(numberOne, numberTwo) { //We can add as many parameters as we like for our functions.
  console.log(numberOne % numberTwo);//Here we add the two parameters for the function getRemainder
}

getRemainder(365, 27);//In this case 365 represents numberOne and 27 numberTwo
// Output: 14

//The following function will use the takeOrder pizza and use two parameters in order to interpolate within
//variables and add toppings to our pizza
var pizza = " pizza";
//var topping = ' topped with bacon.'

function takeOrder(topping, crustType) {
  //console.log('order: ', pizza);
  console.log('order: '+ crustType + pizza +' topped with '+ topping +"");
}

takeOrder('bacon','ultra-thin crust');
takeOrder('cheese','regular crust');
takeOrder('olives','double-cheese');
takeOrder('mushrooms','thin crust');

//17. Pizza order with parameters, itemcount, subtotal calculator

var pizza = " pizza";
var orderCount = 0;
//var tax = 0.06;
var pPrice = 7.50;

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
}
/*
function takeOrder(topping, crustType) {
  //console.log('order: ', pizza);
  console.log('order: '+ crustType + pizza +' topped with '+ topping +"");
} */
function getSubTotal(itemCount) {
  return itemCount * pPrice;
}
function  getTax() {
  return getSubTotal(orderCount) * 0.06;
}
function getTotal(){
  return getSubTotal(orderCount) + getTax();
}
console.log(takeOrder('bacon','ultra-thin crust'));
//Output order types
console.log(getSubTotal(orderCount));
//Calculate SubTotal based on orderCount
console.log(getTotal());
/*
takeOrder('bacon','ultra-thin crust');
takeOrder('cheese','regular crust');
takeOrder('olives','double-cheese');
takeOrder('mushrooms','thin crust');
*/
