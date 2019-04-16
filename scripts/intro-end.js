/*
    Makayla Linnastruth
    February 1, 2019
    INFO 2220
    Jon Holmes
    Assignment 3 Purpose: This is a JavaScript page to practice JavaScript.
*/
var greeting = prompt("Script Prompt:" + "\r\n" + "Enter a greeting", "Hello");
if (greeting === null) {
    alert("There's nothing to see here, " + MyName());
} else {
    alert(greeting + ", " + MyName());
}

loadLast = "I really am last.";
