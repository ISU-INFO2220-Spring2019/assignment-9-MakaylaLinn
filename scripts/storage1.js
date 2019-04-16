/*
    Makayla Linnastruth
    April 15, 2019
    INFO 2220
    Jon Holmes
    Assignment 9 Purpose: This is a JavaScript page to practice using web storage.
*/
$(document).ready(function () {

    //global variables
    var people = [];
    var btnCount = 0;
    var objIndex;

    //gets the local storage item and parses it back into object array
    var storagePeople = localStorage.getItem('people');
    if (storagePeople !== "undefined" && storagePeople !== null) {
        var storedPeople = JSON.parse(localStorage.getItem("people"));
        //adds the stored objects to the page
        //adds the stored objects into the people array
        for (var i = 0; i < storedPeople.length; i++) {
            fillUL(storedPeople[i]);
            people.push(storedPeople[i]);
        }
    }

    //passes in the stored username as the default username text
    $("#txtUser").val(localStorage.username);

    //when login is clicked, it checks for matched username and password values
    //stores username if remember me is checked
    $("#login").on("click", function (e) {
        if ($("input[name=username]").val() === "weaver" && $("input[name=pwd]").val() === "tester") {
            alert("You logged in.");
            var remember = document.getElementById("remember");
            if (remember.checked) {
                localStorage.username = $("input[name=username]").val();
            }
        } else {
            alert("Login failed.")
            localStorage.removeItem("username");
        }
        //page reload
        location.reload();
    });

    //removes username from local storage when forget button is clicked
    $("#forget").on("click", function () {
        localStorage.removeItem("username");
    });

    //creates a person object from input values and saves it to the people array
    $("#addPerson").on("click", function () {
        var person = new Object();
        person.name = $("input[name=name]").val();
        person.phone = $("input[name=phone]").val();
        person.age = $("input[name=age]").val();
        //checks for which group is checked, sets grouop value
        if (document.getElementById("group1").checked) {
            person.group = $("#group1").val();
        } else if (document.getElementById("group2").checked) {
            person.group = $("#group2").val();
        } else if (document.getElementById("group3").checked) {
            person.group = $("#group3").val();
        }

        //checks if the button text is save changes
        //determines whether to swap info in array or add a new person
        if (this.textContent === "Save Changes") {
        //swaps out li info based on the array and reloads the page
            people[objIndex] = person;
            var li = liMaker(person);
            var liChildren = document.getElementById("ulPeople").children;
            liChildren[objIndex].innerHTML = li.html();
            location.reload();
        } else {
            //adds a new person the the array
            people.push(person);
            //displays info
            fillUL(person);
        }
        //adds people array into local storage
        localStorage.people = JSON.stringify(people);
    });

    //creates a li element with person info
    function liMaker(person) {
        //creates group to use for group class
        var group = "group" + person.group;

        //creates li with the person's info
        var li = $("<li>");
        li.prepend('<img id="personIcon" src="images/person icon small.png" />');
        li.append($("<p>").addClass("name").text(person.name));
        li.append($("<p>").addClass("phone").text(person.phone));
        li.append($("<p>").addClass("age").text(person.age));
        li.append($("<p>").addClass("group").text(person.group));
        if (window.location.pathname === "/starting.html") {
            li.append($("<button>", {
                text: "Edit",
                id: "editBtn_" + btnCount,
                //sends current object info back into text boxes
                //to allow for user changes
                click: function () {
                    //gets button id and splits it to get index
                    //button format: btn_0
                    var identify = this.id;
                    var split = identify.split("_");
                    var currentPerson = people[split[1]];
                    objIndex = split[1];

                    //makes a group id to check the correct radio button
                    var gId = "#group" + currentPerson.group;

                    //puts current person object info back into text boxes
                    $("input[name=name]").val(currentPerson.name);
                    $("input[name=phone]").val(currentPerson.phone);
                    $("input[name=age]").val(currentPerson.age);
                    $(gId).attr("checked", true);

                    //changes button text from add person to save changes
                    $("#addPerson").text("Save Changes");
                }
            }));
        }
        //adds group class to created li
        li.addClass(group);
        //index count to add to button id
        btnCount += 1;
        //returns the set li
        return li;
    }

    //adds a created li into the ul
    function fillUL(person) {
        var li = liMaker(person);
        //adds the li
        $("#ulPeople").append(li);
    }

    //clears the people storage
    $("#clearStorage").on("click", function () {
        localStorage.people = undefined;
        location.reload();
    });
});