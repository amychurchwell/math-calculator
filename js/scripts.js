
$('document').ready(function(){
  $('#doAdd').submit(function(event){
    debugger;
    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());
    var answer = num1 + num2;
    $('#result').text(answer);
    event.preventDefault();
    //addition(num1, num2);
  });
});
