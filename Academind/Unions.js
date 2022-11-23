"use strict";
// accepting multiple types of inputs
function combine(num1, num2) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number')
        result = num1 + num2;
    else
        result = num1.toString() + num2.toString();
    return result;
}
var combineAges = combine(30, 56);
console.log('The combined ages of two peoples ages 30 and 56 is ', combineAges);
var combineNames = combine('Max', 'Anna');
console.log('\n\nThe value of combined names Max and Anna is ', combineNames);
