/**
 *
 * @author robiriondo
 * Description
 * JavaScript Tutorial - v2.0
 **/

/* SCOPE
Global Scope
Scope is a big idea in programming, so let's start at a high level.

Scope refers to where in a program a variable can be accessed. The idea is that some variables are unable to be accessed everywhere within a program.

Think of it like a an apartment building. Everyone who lives in the apartment building is under the global scope of the building and its manager. So, if there are rats in the shared laundry room, everyone has access to the laundry machines, and the rats.

If you write a variable outside of a function in JavaScript, it's in the global scope and can be used by any other part of the program, just like the laundry room can be used by everyone in an apartment.

Let's practice this by making some global variables.
*/

var laundryRoom = 'Basement';
var mailRoom = 'Room1A';

console.log('Laundry: ' + laundryRoom + ' ,Mail' + mailRoom);

/* Functional Scope
In our theoretical apartment building, you have your own apartment. It has stuff in it that is yours. Other people in the building can't access it. This is like functional scope. You have access to your stuff inside your apartment, and in the building – but not anyone else's apartment.

When we write variables inside a function, only that function has access to its own variables. Therefore, they are in the functional scope.

In addition to a function having access to its own variables, it also has access to variables in the global scope.

In the last exercise we created both variables in the global scope. That is, laundryRoom and mailRoom are accessible from anywhere in our program.

Now, let's make two variables within a functional scope.
*/

var laundryRoom = 'Basement';
var mailRoom = 'Room1A';

function myApartment() {
  var mailBoxNumber = 'Box 3';
  //Interpolate laundryRoom from 'Basement' to 'In-unit'
  laundryRoom = 'In-unit';
  //Print both variables inside the function myApartment
  console.log('Mail box: ' + mailBoxNumber + ' , Laundry: ' + laundryRoom);
}
console.log('Laundry: ' + laundryRoom + ' ,Mail' + mailRoom);
//Try printing a non-public variable from the function myApartment
/* console.log(mailBoxNumber); //This code wont work because the program will think that the variable is not defined.*/
//Call myApartment function to see the variables inside of it
console.log(myApartment());

/* Review Scope
This unit introduced you to scope.

Scope is the idea in programming that some variables are acessible/inaccessible from other parts of the program.
Global Scope refers to variables that are accessible to every part of the program.
Functional Scope refers to variables created inside functions, which are not accessible outside of its block.
Keep up the awesome job in the next lesson where we'll learn how to make lists and how to program JavaScript to do repetitive tasks for us with loops!
*/

var buildingLaundryCode = 4927;
var buildingAddress = '150 E 14th St, New York, NY';
var buildingPhone = '(481) 516-2342';

function myApartment() {
var myCoffeeMaker = 'Aeropress';
var myCloset = 'Extra coats in the back';
var myRefridgerator = 'Filled with veggies and dark chocolate.';
var myDog = 'Nikko';
}

// Do not edit the code after this line
console.log("**Apartment Building Information**");
console.log("Laundry code: " + buildingLaundryCode + "\nPhone: " + buildingPhone + "\nMailing address: " + buildingAddress);

/* Arrays
We’ve learned to do a number of interesting things with data using functions and using if/else statements. One thing that we haven't learned yet is how to organize and store data.

One way we organize data in real life is to make lists. Let's make one here:

Bucket List:
0. Rappel into a cave
1. Take a falconry class
2. Learn to juggle
Let's now write this list in JavaScript, as an array:

var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
Arrays are JavaScript's way of making lists. These lists can store different data types and they are ordered, meaning the position of each list item is numbered by JavaScript.
*/
var bucketList = ['string one', 'string two', 'string three'];

console.log(bucketList);
/* Property Access
What if we want to select one item from an array?

Luckily, each item in an array has a numbered position. We can access an item using its number, just like we would in an ordinary list. There’s one catch though!

JavaScript counts starting from 0, not 1, so the first item in an array will be at position 0. This is because JavaScript is zero-indexed.

We can select the first item in an array like this:
*/

var bucketList = ['string one', 'string two', 'string three'];
var listItem = bucketList[2];
console.log(bucketList);
console.log(listItem);
/* Fun fact: You can also access each individual character in a string the same way you do with arrays. For instance, you can write:

var hello = 'Hello World';
console.log(hello[6]);
// Output: W
'W' will be the output since it's the character in the 6th position. This works because JavaScript internally stores strings in a similar way that it stores arrays.
*/

/* length property
It is often convenient to know how many items are inside of an array.
We can find this out by using one of an array's built in properties, called .length. We can attach this to any variable holding an array and it will return the number of items inside.
As an example:
var bucketList
*/
var bucketList = ['string one', 'string two', 'string three'];
var listItem = bucketList[2];
console.log(bucketList);
console.log(listItem);
console.log(bucketList.length);
/* Fun fact: .length is also a property for strings.
For instance, you can write 'Hello World'.length, and it will output 11 (the number of characters in "Hello World").*/

/*push Method
JavaScript has a surprise for us: it has built in functions for arrays that help us do common tasks! Let's learn two of them.
First, push() allows us to add items to the end of an array. Here is an example of how this is used:
e.g.:
var bucketList = ['item 0', 'item 1', 'item 2'];
bucketList.push('item 3', 'item 4');
*/
var bucketList = ['string one', 'string two', 'string three'];
var listItem = bucketList[2];
console.log(listItem);
console.log(bucketList.length);
/* Fun fact: .length is also a property for strings.
For instance, you can write 'Hello World'.length, and it will output 11 (the number of characters in "Hello World").*/
// Use the push Method to add items to bucketList
bucketList.push('string four', 'string five');
console.log(bucketList);

/* pop Method
Now that we can push() items into an array, let's pop one off, using pop().
pop() is similar to push(), except that it deletes the last item of an array.
*/
var bucketList = ['string one', 'string two', 'string three'];
var listItem = bucketList[2];
console.log(listItem);
console.log(bucketList.length);
/* Fun fact: .length is also a property for strings.
For instance, you can write 'Hello World'.length, and it will output 11 (the number of characters in "Hello World").*/
// Use the push Method to add items to bucketList
/*
bucketList.push('string four', 'string five');
console.log(bucketList);
*/
// Use the pop method to delete the last element from your array.
bucketList.pop();
console.log(bucketList);
/*
Review Arrays
Arrays are lists and are a way to store data in JavaScript. Each item inside of an array is at a numbered position. Arrays are created with brackets [].
We can access one item in an array using it's numbered position, with syntax like: myArray[0].
Arrays have a length property, which allows you to see how many items are in an array.
Arrays also have their own methods, including push and pop, which add and subtract items from an array, respectively.
*/
