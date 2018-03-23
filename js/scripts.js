// back-end logic //
var name = ("#input#name-input")
var input1 = $("input#front-or-back1").val();
var input2 = $("input#front-or-back2").val();
var input3 = $("input#web-or-not1").val();
var input4 = $("input#web-or-not2").val();
var input5 = $("input#large-or-small1").val();
var input6 = $("input#large-or-small2").val();
var input7 = $("input#biz-or-gov1").val();
var input8 = $("input#biz-or-gov2").val();
var input9 = $("input#ext-or-int1").val();
var input10 = $("input#ext-or-int2").val();

var result1 = "CSS and Design";
var result2 = "C#";
var result3 = "Java";
var result4 = "PHP";
var result5 = "Ruby";

// front-end logic //
$(document).ready(function() {
  // $("form#inputform").submit(function(event) {
  //   event.preventDefault();
  //
  //   if (input1 === "option1") {
  //     if (input1 === "option2" && input2 === "option1" && input3 === "option2" && input4 === "option2" && input5 === "option1") {
  //       $("#answer").text(result5);
  //       $("#nameanswer").text(name);
  //
  //       } else if (input1 === "option2" && input2 === "option2" && input3 === "option1" && input4 === "option2" && input5 === "option2") {
  //         $("#answer").text(result2);
  //
  //       } else if (input1 === "option2" && input2 === "option2" && input3 === "option1" && input4 === "option2" && input5 === "option1") {
  //         $("#answer").text(result3);
  //
  //       } else if (input1 === "option2" && input2 === "option1" && input3 === "option1" && input4 === "option1" && input5 === "option2") {
  //         $("#answer").text(result4);
  //       } else if (input1 === "option2" && input2 === "option1" && input3 === "option2" && input4 === "option2" && input5 === "option1") {
  //         $("#answer").text(result5);
  //       }
  //     } else {
  //     $("#answer").show(result1);
  //   }
  //
  // });
  $("form#name-input").submit(function(event) {
    event.preventDefault();
      $("#nameanswer").text(name);
});
