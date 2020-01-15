var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var num1 = parseInt(read.question("Enter number 1 = \n"));
var num2 = parseInt(read.question("Enter number 1 = \n"));
var num3 = parseInt(read.question("Enter number 1 = \n"));
var num4 = parseInt(read.question("Enter number 1 = \n"));
var num5 = parseInt(read.question("Enter number 1 = \n"));
var num6 = parseInt(read.question("Enter number 1 = \n"));
var num7 = parseInt(read.question("Enter number 1 = \n"));



console.log(num3+num4+num5+num6+num7);
// answer is as follows
var answer = util.add(num1, num2);
console.log(answer);
