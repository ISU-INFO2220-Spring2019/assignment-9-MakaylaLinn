/*
    Makayla Linnastruth
    March 7, 2019
    INFO 2220
    Jon Holmes
    Assignment 7 Purpose: This is a JavaScript page to practice jQuery.
*/
$(document).ready(function () {
    //Changes text in span one
    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });
    //Adds text to end of span one
    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append("== Text at the back");
    });
    //Adds text to start of span one
    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend("Text at the front --");
    });
    //Adds text before span one
    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++");
    });
    //Adds text after span one
    $("#btnAfterSpan").click(function () {
        $("#spnOne").after("@@ Text After");
    });
    //Shows the text in span one
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });
    //Adds a sequential number to the start of each paragraph
    $("#btnNumberPs").click(function () {
        var childCount = $("#divNumbers").children();
        var childToMod = childCount.first();
        for (var i = 1; i < childCount.length + 1; i++) {
            childToMod.prepend(i + ". ");
            childToMod = childToMod.next();
        }
    });
    //changes class of all paragraphs in the div to success
    $("#btnClassPSuccess").click(function () {
        $("#divClass").children().addClass("success");
    });
    //changes every even paragraph in the div to error
    $("#btnClassPError").click(function () {
        var children = $("#divClass").children();
        for (var i = 0; i < children.length; i++) {
            if (i % 2 === 0) {
                children.eq(i).removeClass("success");
                children.eq(i).addClass("error");
            }
        }
    });
    //changes all paragraph classes in div to warning
    $("#btnClassPWarning").click(function () {
        var children = $("#divClass").children();
        for (var i = 0; i < children.length; i++) {
            children.eq(i).removeClass();
            children.eq(i).addClass("warning");
        }
    });
    //Adds last names appended to first names with html style
    $("#btnAddLastNames").click(function () {
        $(".bff").prev().append("<strong>Flinstone</strong>");
        $(".bff").append("<em>Rubble</em>");
        $(".bff").next().append("<del>the Dinosaur</del>");
    });
    //Removes Larry LI
    $("#btnRemoveLarry").click(function () {
        $(".first").remove();
    });
    //Takes out Curly LI text
    $("#btnClearCurly").click(function () {
        $(".second").empty();
    });
    //Removes the Moe LI last name
    $("#btnRemoveMoeLastName").click(function () {
        $(".third").children("span").remove();
    });
    //Removes the Shemp LI last name
    $("#btnRemoveShempLastName").click(function () {
        $(".third").next().children("span").remove();
    });
    //Changes the text in the second span of the second paragraph of the div
    $("#btnChangeText").click(function () {
        $("#spnTwo").parent().next().children("span").eq(1).text("I was Changed.");
    });
    //toggles the paragraphs to hide, and then show
    var firstClick = true;
    $("#btnTogglePs").click(function () {
        if (firstClick === true) {
            $("#btnTogglePs").text("Show All Ps");
            firstClick = false;
        } else {
            $("#btnTogglePs").text("Hide All Ps");
            firstClick = true;
        }
        $("p").toggle();
    });
});