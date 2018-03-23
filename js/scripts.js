// back-end logic //
var name = ("#input#name-input")
var input1 = $("input#front-or-back").val();
var input2 = $("input#web-or-not").val();
var input3 = $("input#large-or-small").val();
var input4 = $("input#biz-or-gov").val();
var input5 = $("input#ext-or-int").val();
var result1 = "CSS and Design";
var result2 = "C#";
var result3 = "Java";
var result4 = "PHP";
var result5 = "Ruby";


// front-end logic //
$(document).ready(function() {
  $("form#question1").click(function(event) {
    event.preventDefault();
    if (input1 === "option1") {
      if (input1 === "option2" && input2 === "option1" && input3 === "option2" && input4 === "option2" && input5 === "option1") {
        $("#answer").text(result5);
        $("nameanswer").text(name);
      }
      $("#result-group").show();
    } else {
      $("#answer").hide();
      $("#answer").show(result1);

    }

  });
});
