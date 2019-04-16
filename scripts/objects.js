/*
    Makayla Linnastruth
    February 10, 2019
    INFO 2220
    Jon Holmes
    Assignment 4 Purpose: This is a JavaScript page to practice JavaScript.
*/

//Global variables
var personHolder;
var characters = [];

//Creates a Person object
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.age;
    this.stepsToTake;

    //Counts and stores each number in a sequence
    //Returns the sequence to display
    this.sequence = function Sequential() {
        var sequenceVal = "";
        var plusOne = this.stepsToTake + 1;
        for (var i = 1; i < plusOne; i++) {
            sequenceVal += i + ' ';
        }
        return sequenceVal;
    }

    //Adds all odd numbers in a value
    //returns odd number value
    this.sum = function Sum() {
        var total = 0;
        for (var i = 1; i < this.age; i++) {
            if (i % 2 !== 0) {
                total += i;
            }
        }
        return total;
    }
}

//converts from celsius to fahrenheit and vice versa
function Converter() {
    //got formulas online
    //https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html
    this.celsius = function ToCelsius(degreesF) {
       var degreesC = (degreesF - 32) * 5 / 9;
        return degreesC;
    }

    this.fahrenheit = function ToFahrenheit() {
        var argValue = arguments[0]; 
        var degreesF = argValue * 9 / 5 + 32;
        return degreesF;
    }
}

//Pompts user to type name
//Says hello to user
function SayHello() {
    var name = prompt("What is your name?");
    var txt;
    if (name === null || name === "") {
        txt = "Incorrect text input.";
    } else {
        txt = "Hello, " + name + "!"
    }
    alert(txt);
}

//Prompts name and greets user
function Greet(greeting) {
    var name = prompt("What is your name?");
    var txt;
    if (name === null || name === "") {
        txt = "Incorrect text input.";
    } else {
        txt = greeting + ", " + name + "."
    }
    alert(txt);
}

//Performs various operations on a number
//Displays numbers
function DoMaths(num1, num2) {
    var concatenated = "" + num1 + num2;
    var added = num1 + num2;
    var subtracted = num1 - num2;
    var multiplied = num1 * num2;
    var divided = num1 / num2;
    alert(concatenated + '\r\n' + added + '\r\n' + subtracted +
        '\r\n' + multiplied + '\r\n' + divided);
}

//Creates a person using user prompt values
//returns created user to global variable
function CreatePerson() {
    var fName = prompt("Please enter your first name.");
    var lName = prompt("Please enter your last name.");
    var age = prompt("Please enter your age in years from 1-150.");
    age = Number(age);
    var text;
    if (isNaN(age) || age < 1 || age > 150) {
        text = "Wrong input.";
        alert(text);
    }

    personHolder = new Person(fName, lName);
    personHolder.age = age;
    return personHolder;
}

//Defines steps to take and displays steps in Person sequence
function ShowSteps() {
    if (personHolder === undefined) {
        alert("Object does not exist; please click the 'Fill Object' button first.");
    } else {
        personHolder.stepsToTake = 10;
        alert(personHolder.firstName + " " + personHolder.lastName +
            " took steps \r\n" + personHolder.sequence());
    }
}

//Uses to Celsius converter on a specified value
function GetDegreesInC(degreeF) {
    var newConverter = new Converter();
    var value = newConverter.celsius(degreeF);
    alert(value);
}

//Uses to Fahrenheit converter on specified value
function GetDegreesInF(degreeC) {
    var newConverter = new Converter();
    var value = newConverter.fahrenheit(degreeC);
    alert(value);
}

//Fills the global array with Person objects
function FillCharacterArray() {
    var array1 = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var array2 = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var array3 = [36, 34, 7, 34, 32, 8];

    for (var i = 0; i < array1.length; i++) {
        var newPerson = new Person(array1[i], array2[i]);
        newPerson.age = array3[i];
        characters.push(newPerson);
    }
    return characters;
}

//selects a character in global array and adds odd age sum
function GetCharacterAt(index) {
    if (characters === undefined) {
        alert("Array has not been filled. Please click \r\n" +
            "the 'Fill characters array' button.");
    } else {
        var object = characters[index];
        alert(object.firstName + " your odd age sum is " + object.sum());
    }
}