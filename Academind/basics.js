"use strict";
// core data types
function add(n1, n2, result, phrase) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
}
var number1 = 5;
var number2 = 98.30;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
// display to screen
var change = document.querySelector('root');
