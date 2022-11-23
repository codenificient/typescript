"use strict";
function add(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// function printResult(num: number): undefined {
//     console.log('Result: ' + num);
//     return;
// }
printResult(add(5, 87));
var combineValues;
combineValues = add;
console.log(combineValues(8, 9));
function addAndHandle(numa, numb, cb) {
    var result = numa + numb;
    cb(result);
}
addAndHandle(10, 67, function (result) {
    console.log(result);
});
