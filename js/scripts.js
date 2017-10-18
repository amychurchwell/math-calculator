
$('document').ready(function(){
  var answer;
  console.log(answer);

  $('#doAdd').submit(function(event){
    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());
    answer = num1 + num2;
    console.log(answer);
    event.preventDefault();
    //addition(num1, num2);
  });
});
