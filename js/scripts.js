// back-end logic //
// This section is incomplete //
var input1 = $("form#question1").val();
var input2 = $("form#question2").val();
var input3 = $("form#question3").val();
var input4 = $("form#question4").val();
var input5 = $("form#question5").val();

var result1 = "CSS and Design";
var result2 = "C#";
var result3 = "Java";
var result4 = "PHP";
var result5 = "Ruby";

var name = $("input#name").val();
// front-end logic //

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();

    if (input1 === "2") {
      } else if (input1 === "2" && input2 === "3" && input3 === "6" && input4 === "8" && input5 === "9") {
        $("#answer").text(result5);
        $("#result").show();
        $("#nameoutput").text(name);
        alert("3")

      } else if (input1 === "2" && input2 === "4" && input3 === "5" && input4 === "8" && input5 === "10") {
          $("#answer").text(result2);
          $("#result").show();
          $("#nameoutput").text(name);
          // alert("4")

      } else if (input1 === "2" && input2 === "2" && input3 === "5" && input4 === "8" && input5 === "9") {
          $("#answer").text(result3);
          $("#result").show();
          $("#nameoutput").text(name);
          alert("5")

      } else if (input1 === "2" && input2 === "3" && input3 === "5" && input4 === "7" && input5 === "10") {
          $("#answer").text(result4);
          $("#result").show();
          $("#nameoutput").text(name);
          // alert("6")

      } else {
      $("#result").show();
      $("#answer").text(result1);
      }
      // alert("7")
      $("#result").show();
      $("#nameoutput").text(name);

  });
});
