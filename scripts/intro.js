/*
    Makayla Linnastruth
    February 1, 2019
    INFO 2220
    Jon Holmes
    Assignment 3 Purpose: This is a JavaScript page to practice JavaScript.
*/

alert("The script in the header has run");
var loadLast = "I loaded last";
var array;
if (array === "undefined") {
    array = [];
} else {
    alert("The array was not defined");
}

//all the elements in the array
array[0] = "34";
array[1] = "5.5";
array[2] = "33.5";
array[3] = "46.5";
array[4] = "59";
array[5] = "64";
array[6] = "43";
array[7] = "64";
array[8] = "48";
array[9] = "49";
array[10] = "40";
array[11] = "59";
array[12] = "44";
array[13] = "54";
array[14] = "19.5";
array[15] = "25";
array[16] = "69";
array[17] = "23";

//calculate the average
var sum;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}
var average = sum / array.length;
alert(average);

function MyName() {
    return "Makayla";
}
