//business logic
var result1 = "CSS and Design";
var result2 = "C#";
var result3 = "Java";
var result4 = "PHP";
var result5 = "Ruby";
var userInput1;
var userInput2;
var userInput3;
var userInput4;
var userInput5;
var userInput = [];

//run output function


$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    //collect name
    var name = $("input#name").val();

    //collect user inputs
    var userInput1 = $("select#question1").val();
    var userInput2 = $("select#question2").val();
    var userInput3 = $("select#question3").val();
    var userInput4 = $("select#question4").val();
    var userInput5 = $("select#question5").val();

    //show result paragraph
    $("#result").show();

    //show specific results
    $("#nameOutput").text(name);
//CSS + design
      if (userInput1 === "A") {
        $("#answerFinal").text(result1);
//C#
      } else if (userInput2 === "B" && userInput2 === "C" && userInput2 === "E" && userInput2 === "H" && userInput2 === "I") {
        $("#answerFinal").text(result2);
//Java
      } else if (userInput3 === "B" && userInput3 === "D" && userInput3 === "E" && userInput3 === "H" && userInput === "J") {
        $("#answerFinal").text(result3)
//PHP
      } else if (userInput4 === "B" && userInput4 === "C" && userInput4 === "E" && userInput4 === "G" && userInput4 === "J") {
        $("#answerFinal").text(result4)
//Ruby
      } else if (userInput5 === "B" && userInput5 === "C" && userInput5 === "E" && userInput5 === "H" && userInput5 === "I") {
        $("#answerFinal").text(result5)
      }

    // $("#answerFinal").text(result1);
    $("#answerFinal").text(result2);
    // $("#answerFinal").text(result3);
    // $("#answerFinal").text(result4);
    // $("#answerFinal").text(result5);

//allow user to hide result paragraph
      $("#note").click(function() {
       $("#result").fadeOut("slow");
    });
  });
});
