/*
    Makayla Linnastruth
    February 17, 2019
    INFO 2220
    Jon Holmes
    Assignment 5 Purpose: This is a JavaScript page to practice dom navigation.
*/
var array1 = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var array2 = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var array3 = [36, 34, 7, 34, 32, 8];

//shows pOne paragraph inner text
function showInnerText() {
    alert(document.getElementById("pOne").innerText);
}

//show pOne paragraph inner HTML
function showInnerHTML() {
    alert(document.getElementById("pOne").innerHTML);
}

//adds a sequential number after a list item
function numberList() {
    var parent = document.getElementsByTagName("UL")[0];
    var howMany = parent.getElementsByTagName("LI");
    for (var i = 0; i < howMany.length; i++) {
        var numbers = document.createTextNode(i + 1 + "");
        howMany[i].appendChild(numbers);
    }
}

//changes every other row to be a different class
function markRows() {
    var parent = document.getElementById("tblMarkRows");
    var rows = parent.getElementsByTagName("TR");
    for (var i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].className = "other";
        }
    }
}

//adds table rows populated by global arrays
function addRows() {
    var parent = document.getElementById("tblAddRows");
    for (var i = 1; i < array1.length + 1; i++) {
        var tableRow = parent.insertRow(i);
        tableRow.innerHTML = "<td>" + array1[i - 1] + "</td>"
            + "<td>" + array2[i - 1] + "</td>"
            + "<td>" + array3[i - 1] + "</td>";
        if (i % 2 === 0) {
            tableRow.className = "other";
        }
    }
}

//adds dividers with a message at the end of the body
function addDivider(temp) {
    var newMessage = document.createElement("DIV");
    newMessage.className = temp;
    var text;
    if (temp === "error") {
        text = "This is an ";
    } else {
        text = "This is a "
    }
    newMessage.innerText = text + temp + " message.";
    var addToBody = document.getElementsByTagName("BODY")[0];
    addToBody.appendChild(newMessage);
}

//adds success divider
function addSuccess() {
    var temp = "success";
    addDivider(temp);

}

//adds warning divider
function addWarning() {
    var temp = "warning";
    addDivider(temp);
}

//adds error divider
function addError() {
    var temp = "error";
    addDivider(temp);
}