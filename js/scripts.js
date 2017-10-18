var addition = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multi = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var doMath = $('#mathInput').val();

$('#doAdd').submit(function(){
  addition(num1, num2);
});
