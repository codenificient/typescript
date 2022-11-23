"use strict";
// arrow functions
var regValue = function () {
    return 10;
};
console.log(regValue());
var getArrowValue = function () {
    return 10;
};
console.log(getArrowValue());
var getNewArrow = function () { return 20; };
var getNewArrow1 = function (m) { return 20 * m; };
var getNewArrow2 = function (m, n, p) { return n + m - p; };
console.log(getNewArrow());
console.log(getNewArrow1(5));
console.log(getNewArrow2(7, 8, 3));
//# sourceMappingURL=tutorial10.js.map