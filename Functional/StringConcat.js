var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var str1 = read.question("Enter string 1 = \n").trim();
// while(isNaN(str1) || str1.length == 0){
//     str1 = read.question("\nInvalid String Input (Enter Again) = ").trim();
// }

var str2 = read.question("Enter string 1 = \n").trim();
// while(isNaN(str2) || str2.length == 0){
//     str2 = read.question("\nInvalid String Input (Enter Again) = ").trim();
// }

var answer = util.stringConcat(str1, str2);
console.log(answer);
