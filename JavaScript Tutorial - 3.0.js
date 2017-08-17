/**
 *
 * @author robiriondo
 * Description
 * JavaScript Tutorial - v3.0
 **/

/*
Loops
One of a computer's greatest abilities is to repeat a task over and over so we don't have to. Loops let us tell the computer to loop over a block of code so that we don't have to write out the same process over and over.
Loops are especially helpful when we have an array where we'd like to do something to each item in the array, like logging each item to the console.
There are two kinds of loops we will learn in this lesson:
for loops, which let us loop a block of code a known amount of times.
while loops, which let us loop a block of code an unknown amount of times.
*/

//Looping by hand
var vacationSpots = ['dubai', 'medellin', 'tokyo'];
//Print each spot to the screen
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//Looping the small array above but this time with a "for" loop
/*
Since this syntax is a little complicated, let's break it into 4 parts:
Within the for loop's parentheses, the start condition is var i = 0, which means the loop will start counting at 0.
The stop condition is i < vacationSpots.length, which means the loop will run as long as i is less than the length of the animals array. When i is greater than the length of the animals array, the loop will stop looping.
The iterator is i++. This means that each loop, i will have 1 added to it.
And finally, the code block is inside the { ... }. The block will run each loop, until the loop stops.
The secret to loops is that i, the variable we created inside the for loop's parentheses, is always equal to a number. To be more clear, the first loop, i will equal 0, the second loop, i will equal 1, and the third loop, i will equal 2.
This makes it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. We can write a for loop, and replace the hard coded number with the variable i, like this: animals[i].
*/
var vacationSpots = ['dubai', 'medellin', 'tokyo'];
//Print each spot to the screen
/*
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
*/
for (var i = 0; i < vacationSpots.length; i++ ) {
  console.log('I would love to visit: ' + vacationSpots[i]);
}
/*
for loop backwards
If we can make a for loop run forwards through an array, can we make it run backwards through it? Of course!
We can make out loop run backwards by modifying the start, stop, and iterator conditions.
To do this, we'll need to edit the code between the for loop's parentheses:
The start condition should set i to the length of the array.
The stop condition should end when i is 0.
The iterator should subtract 1 each time, which is done with i--.
*/
var vacationSpots = ['dubai', 'medellin', 'tokyo'];
//Print each spot to the screen
/*
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
*/
//Backwards for loop for var vacationSpots
// making vacationSpots.legth - 1 will assure that no undefined spots are called.
for (var i = vacationSpots.length - 1; i >= 0; i-- ) {
  console.log('I would love to visit: ' + vacationSpots[i]);
}

/*
for loops inside of for loops
Let's say that you and a friend would like to go on vacation together. You've both made arrays of your favorite places and you want to compare to see if any places match. This is a job for loops!
The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.
Every time the outter for loop runs once, the inner for loop will run completely.
With two for loops, we can check to see if any of the your vacation spots match your friend's spots.
*/

var myPlaces = ['Arequipa', 'Medellin', 'Miami'];
var friendPlaces = ['Paris', 'Barranquilla', 'Peru'];

for (var i = 0; i < myPlaces.length; i++) {
  console.log(myPlaces[i]);
  for (var j = 0; j < friendPlaces.length; j++) {
    //console.log(friendPlaces[j]);
    if (myPlaces[i] === friendPlaces[j]) {
      	console.log('Match: ' + myPlaces[i]);
        }
    else {
      	console.log('They are not the same places.');
    }
  }
}

/*
while Loops
Awesome job! for loops are great, but they have a limitation: you have to know how many times you want the loop to run. What if you want a loop to run an unknown or variable number of times instead?
For example, if we have a deck of cards and we want to flip cards (loop a card flipping function) until we get a 'Spade', how could we write that in JavaScript?
That's the purpose of the while loop. It looks like similar to a for loop. Check it out:

while (condition) {
  // code block that loops until condition is false
}

The loop begins with the keyword while
Inside the parentheses, we can insert a condition. As long as the variable evaluates to true the block of code will loop.
Inside the code block we can write any code we'd like to loop.
*/

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
      console.log(currentCard);

  		var randomNumber = Math.floor(Math.random() * 4)//Creates a random number between 0 and 3

      currentCard = cards[randomNumber];
       }
console.log('Found a Spade! ' + currentCard);

/* Review
In this unit we learned how to write less repetitive code with loops.

for loops allow us to repeat a block of code a known amount of times.
We can use a for loop inside another for loop to compare two lists.
while loops are for looping over a code block an unknown amount of times.
At this point, you've learned the foundational concepts of JavaScript. Now we are going to apply them to the web with a JavaScript library called jQuery.
*/
