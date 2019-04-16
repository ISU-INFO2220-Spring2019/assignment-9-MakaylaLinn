/*
    Makayla Linnastruth
    March 31, 2019
    INFO 2220
    Jon Holmes
    Assignment 8 Purpose: This is a JavaScript page to practice using AJAX.
*/
$(document).ready(function () {

    $("#btnSearch").click(function () {
        $.ajax({
            url: "data/books.json",
            success: function (data) {
                var src = $("#txtSearch").val();
                //using regular expressions, the i, makes it case insensitive
                //https://www.w3schools.com/Js/js_regexp.asp
                //would like to find out how to preserve the special characters, such as a "+"
                var regex = new RegExp(src, 'i');

                //iterates through each array object (book) in the json file
                $.each(data.books, function (ndx, obj) {
                    //creates a string that concatenates each value into a
                    //large string to search through
                    var bigString = obj.title + obj.authorName.firstName +
                        obj.authorName.middleName + obj.authorName.lastName +
                        obj.isbn + tagsString;

                    //string to hold all tags to add them to the big string
                    var tagsString;
                    //makes tags into li within a ul to add to the td
                    var tagUL = $("<ul>");
                    for (var item in obj.tags) {
                        tagsString += obj.tags[item];
                        tagUL.append($("<li>").text(obj.tags[item]));
                    }

                    //creates rows populated with book info for each book
                    var tr = $("<tr>");
                    tr.append($("<td>").text(obj.title));
                    tr.append($("<td>").text(obj.isbn));
                    tr.append($("<td>").text(obj.authorName.lastName + ", " +
                        obj.authorName.firstName + " " + obj.authorName.middleName));
                    tr.append($("<td>").html(tagUL));

                    //adds the table row if the search is empty or if the
                    //regex is true, meaning it found a match
                    if (src == "" || regex.test(bigString)) {
                        $("#tblBooks").append(tr);
                    }
                });
            },
            error: function (o, e) {
                alert("Something went wrong!");
            }
        });
    });

    $("#txtPeopleSearch").keydown(function () {
        $("#ulPeople").empty();
        $.ajax({
            url: "data/people.json",
            success: function (data) {
                var src = $("#txtPeopleSearch").val();
                //using regular expressions, the i, makes it case insensitive
                //https://www.w3schools.com/Js/js_regexp.asp
                //would like to find out how to preserve the special characters, such as a "+"
                var regex = new RegExp(src, 'i');

                //iterates through each array object (person) in the json file
                $.each(data, function (ndx, obj) {
                    //creates a string that concatenates each value into a
                    //large string to search through
                    var bigString = obj.name + obj.age + obj.phone + obj.group;

                    var group = "group" + obj.group;
                    //creates li with the person's info
                    var li = $("<li>");
                    li.prepend('<img id="personIcon" src="images/person icon small.png" />');
                    li.append($("<p>").addClass("name").text(obj.name));
                    li.append($("<p>").addClass("phone").text(obj.phone));
                    li.append($("<p>").addClass("age").text(obj.age));
                    li.append($("<p>").addClass("group").text(obj.group));
                    li.addClass(group);
                    //adds the table row if the search is empty or if the
                    //regex is true, meaning it found a match
                    if (regex.test(bigString)) {
                        $("#ulPeople").append(li);
                    }
                });
            },
            error: function (o, e) {
                alert("Something went wrong!");
            }
        });
    });
});
