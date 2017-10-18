
$('document').ready(function(){
  console.log('page loaded');
  $('#doAdd').submit(function(event){
    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());
    var answer = num1 + num2;
    $('#result').text(answer);
    event.preventDefault();
    //addition(num1, num2);
  });
  $('#doSub').submit(function(event){
    console.log('TESTIN');
    var num1 = parseInt($('#number1S').val());
    var num2 = parseInt($('#number2S').val());
    var answer = num1 - num2;
    $('#result').text(answer);
    event.preventDefault();
    //addition(num1, num2);
  });
  $('#doMulti').submit(function(event){
    console.log('TESTIN');
    var num1 = parseInt($('#number1M').val());
    var num2 = parseInt($('#number2M').val());
    var answer = num1 * num2;
    $('#result').text(answer);
    event.preventDefault();
    //addition(num1, num2);
  });
  $('#doDivide').submit(function(event){
    console.log('TESTIN');
    var num1 = parseInt($('#number1D').val());
    var num2 = parseInt($('#number2D').val());
    var answer = num1 / num2;
    $('#result').text(answer);
    event.preventDefault();
    //addition(num1, num2);
  });
});
