var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var num1 = read.question("Enter number 1 = \n").trim();
// while(isNaN(num1) || num1.length == 0){
//     num1 = read.question("\nInvalid Integer Input (Enter Again) = ").trim();
// }

var num2 = read.question("Enter number 1 = \n").trim();
// while(isNaN(num2) || num2.length == 0){
//     num2 = read.question("\nInvalid Integer Input (Enter Again) = ").trim();
// }

var answer = util.add(num1, num2);
console.log(answer);
