/**
 *
 * @author robiriondo
 * Description
 * JavaScript Tutorial - v4.0
 **/

/*
JavaScript with HTML and CSS
JavaScript is the most widely used language on the web. So how can we use JavaScript on a website?
So far, we've only used JavaScript in isolation – not alongside other technologies. Javascript typically gets included with HTML and CSS (which structure and style web pages). All modern browsers know how to run JavaScript if we include it in an HTML and CSS project.
JavaScript also has some special functions to help us access the code inside HTML and CSS so that we can write JavaScript to make that output interactive and dynamic.
In this lesson, we will use the concepts we've learned throughout the course to make an HTML and CSS website dynamic.
*/

/* main.js */
alert('Hello JavaScript!');

/* index.html*/
<!DOCTYPE html>
<html>
<head>
  <link rel='stylesheet' type='text/css' href='css/styles.css'>
</head>

<body>
  <h1>Proficient in:</h1>
  <div class='skillset'>
    <div class='skill-html'>
      <h1>HTML &amp; CSS</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Broadway</li>
          <li>MOVE</li>
        </ul>
      </p>
    </div>

    <div class='skill-js'>
      <h1>JavaScript</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Password Validator</li>
          <li>Whale Talk</li>
        </ul>
      </p>
    </div>

    <div class='skill-jquery'>
      <h1>jQuery</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Coming soon...</li>
        </ul>
      </p>
    </div>
  </div>

<script src='js/main.js'></script>
</body>

</html>

/* Getting a class through a JS file*/
var skillset = document.getElementsByClassName('skillset');
alert(skillset);

/* Applying a selector using jQuery */
/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  alert($skillset);
}
$(document).ready(main);


/*
Hide method
Now that we can select an element with jQuery, we can use built-in jQuery functions to modify it. From here on, we will start building features into our skills website.
First off, it would be nice to make the page fade in when loaded.
To make a page fade in, it must first be hidden. We can hide elements with jQuery with a function named hide.
We can hide elements with jQuery, like this:
$('.my-selector').hide();
We attached the hide function directly to the jQuery selector.
The hide function will add the CSS property display: none to the DOM element from the page, which will hide it.
*/

/* Basic Application
We can hide elements with jQuery, like this:
$('.my-selector').hide();
We attached the hide function directly to the jQuery selector.
The hide function will add the CSS property display: none to the DOM element from the page, which will hide it.
*/

/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  $('.skillset').hide();
}
$(document).ready(main);

/*
Fade in
*/

/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
}
//$(document).ready(main

/*
Click
The next feature we'd like to build is making the 'Recent Projects' clickable. When clicked, the button should show the individual projects, and when clicked again, it should hide the projects.

In order to make an element clickable, we need to write jQuery that listens to an element for a click event. jQuery can do this with an event listener function named on('click').

This function will wait for a click event, and when one occurs, it will execute a provided function. The syntax looks like this:

$('.example-class').on('click', function() {
  // execute the code here when .example-class is clicked.
});
$('.example-class') selects an HTML element with the class example-class.
.on('click', function() { ... }) adds a click listener to the selector. When it's clicked the function will execute the code within its block.
*/
/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  $('.projects').hide();
  $('.projects-button').on('click', function(){})
  $('.skillset').fadeIn(1000);
}
//$(document).ready(main

/*
$('.skillset').on('click', function() {
  // execute the code here when .example-class is clicked.

});
*/

/*
show
To make our projects visible when the 'Recent Projects' button is clicked, jQuery provides a function named show, which is the opposite of hide.

To show an element, the syntax looks as such:

$('.example-class').show();
show is attached directly to the jQuery selector.
show will change the CSS attribute display: none to a visible display property, therefore showing the element.
*/

/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').show();
  })
  $('.skillset').fadeIn(1000);

}
//$(document).ready(main

/*
$('.skillset').on('click', function() {
  // execute the code here when .example-class is clicked.

});
*/

/*Toggle */
/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  //$('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').toggleClass('active');
  })
  $('.skillset').fadeIn(1000);

}
//$(document).ready(main

/*
$('.skillset').on('click', function() {
  // execute the code here when .example-class is clicked.

});
*/

/* this
In the last exercise, we were toggling every 'Recent Projects' button instead of only the one we clicked on.

We can select the specific element we clicked on with the jQuery selector $(this).

The syntax looks like this:

$('.example-class').on('click', function() {
  $(this).toggleClass('active');
});
$(this) selects the clicked element. If there are multiple elements with a class of .example-class, this will only toggle the class of the one that is clicked on.
Notice that $(this) does not require quotes around it, since it is not a CSS class. Instead, this is a JavaScript keyword.
$(this) behaves just like our other selectors. We can attach toggleClass or toggle to it in the same way.
*/

/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  //$('.projects').hide();
  $('.projects-button').on('click', function(){
    //$('.projects').toggleClass('active');
    $(this).toggleClass('active');
  })
  $('.skillset').fadeIn(1000);

}
//$(document).ready(main

/*
$('.skillset').on('click', function() {
  // execute the code here when .example-class is clicked.

});
*/

/*
next
In order to toggle the projects in each section, we will need to use $(this) to select the button we clicked on. The issue is that $(this) refers to the projects-button in our current code, and not the projects themselves.

We need a way to select the projects elements next to the button that we clicked.

Luckily, jQuery can select elements logically. In index.html, notice that the projects-button element is directly followed by the projects list. Therefore the projects element is next after it.

jQuery has a function named next to help us select elements that are next to another element. If we have this in our HTML:

<div class='item-one'> ... </div>
<div class='item-two'> ... </div>
If we wanted to hide item-two, we could write:

$('.item-one').next().hide();
We can attach next to any jQuery selector to select the next direct element.
Then, we can attach any jQuery function to next(). In this case, we attached hide, which would hide the next element after the $('.item-one') element.
*/

/*
next
In order to toggle the projects in each section, we will need to use $(this) to select the button we clicked on. The issue is that $(this) refers to the projects-button in our current code, and not the projects themselves.

We need a way to select the projects elements next to the button that we clicked.

Luckily, jQuery can select elements logically. In index.html, notice that the projects-button element is directly followed by the projects list. Therefore the projects element is next after it.

jQuery has a function named next to help us select elements that are next to another element. If we have this in our HTML:
*/

/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  //$('.projects').hide();
  $('.projects-button').on('click', function(){
    //$('.projects').toggleClass('active');
    $(this).next().toggle();
    //$('.item-one').next().hide();
  })
  //$('.skillset').fadeIn(1000);

}
//$(document).ready(main

/*
$('.skillset').on('click', function() {
  // execute the code here when .example-class is clicked.

});
*/

/*
text
Since we have a few areas to click on, it may be helpful to show users which sections they have viewed by changing the text inside the 'Recent Projects' buttons.

When a user clicks on a button, we will permanently change the text of the button to 'Projects Viewed'.

We can change the text of an element with the jQuery function text. It's syntax looks like this:

$('.my-selector').text('Hello world!');
text attaches directly to a jQuery selector.
Inside of text's parentheses, we can provide text that will become the text of our DOM element. The text we supply will replace any existing text, and if the element has no pre-existing text, text will add it.
*/

/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);*/

function main() {
  //var $skillset = $('.skillset');
  //Same code to select the class but with jQuery
  //alert($skillset);
  //$('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').toggleClass('active');
    $(this).text('Projects Viewed');
    //$(this).next().toggle();

    //$('.item-one').next().hide();
  })
  //$('.skillset').fadeIn(1000);

}
//$(document).ready(main

/*
$('.skillset').on('click', function() {
  // execute the code here when .example-class is clicked.

});
*/

/* slideToggle
The last feature we'd like to add is an aesthetic one. Right now when we click the 'Recent Projects' buttons, the projects appear instantly.

Let's instead make the projects slide onto the page when we click the 'Recent Projects' button and then slide off the page when we click the button again.

jQuery provides a method named slideToggle that can animate an element's entrance and exit. The syntax looks like this:

$('.example-class').slideToggle(400);
slideToggle can be called directly on a jQuery selector.
slideToggle also takes a parameter of milliseconds that the animation should last. The default is 400 milliseconds, or 0.4 seconds.
*/

//Fully functional methods .hide .fadein .on .next .toggleClass .slideToggle .text .ready
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
}

$(document).ready(main);
