/*
The conditional Challenge
*/

//Quiz begins with no correct answers
var correctAns = 0;

//Ask at least five questions
var q1 = prompt("Multiply 9 * 9");
if (parseInt(q1) === 81) {
  //document.write("Question 1 is correct.");
  correctAns += 1;
}
var q2 = prompt("Square root of 64");
if (parseInt(q2) === 8) {
  //document.write("Question 2 is correct.");
  correctAns += 1;
}
var q3 = prompt("Is it warm or cold outside?");
if (q3.toUpperCase() === "WARM" || q3.toUpperCase() === "COLD") {
  //document.write("Question 3 is correct.");
  correctAns += 1;
}
var q4 = prompt("What is Mark Zuckerberg's favorite color?");
if (q4.toUpperCase() === "BLUE") {
  //document.write("Question 4 is correct.");
  correctAns += 1;
}
var q5 = prompt("What is 2 + 2");
if (parseInt(q5) === 4) {
  //document.write("Question 5 is correct.");
  correctAns += 1;
} else {
  correctAns = 0;
}

//Keep track of the number of questions the user answered correctly

/* Rank the player. If the player answered all five correctly, give that player the gold crown:
3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all. */
rank = "";
if (correctAns === 1 || correctAns === 2) {
  rank = "you earned a Bronze Crown";
} else if (correctAns === 3 || correctAns === 4) {
  rank = "you earned a Silver Crown";
} else if (correctAns === 5) {
  rank = "you earned a Gold Crown";
} else {
  rank = "you didn't earn any crowns.";
}

//Print your findings to the screen
document.write("<h1>These are your answers: </h1>");
document.write("<h2>" + q1 + ", " + q2 + ", " + q3 + ", " + q4 + ", " + q5 + "</h2>");
document.write("<h3>You answered " + correctAns + " correct answers.</h3>");
document.write("<h4>Based on your rank, " + rank + "<h4>");
