"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there!!";
    }
    console.log(greet);
}
greetPerson("Bucky");
var a = 1;
var b = 4;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); // 10
    console.log(b_1); // 20
}
console.log(a); // 10
console.log(b); // 4
// LET DECLARATION DOES NOT HOIST, THEY ARE BLOCK SCOPED, AND CANNOT BE REDECLARED
// VAR DECLARATIONS ARE HOISTED, THEY ARE FUNCTIONALLY SCOPED AND CAN BE REDECLARED
//# sourceMappingURL=tutorial6.js.map