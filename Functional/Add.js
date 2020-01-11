var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var num1 = parseInt(read.question("Enter number 1 = \n"));
var num2 = parseInt(read.question("Enter number 1 = \n"));

var answer = util.add(num1, num2);
console.log(answer);
