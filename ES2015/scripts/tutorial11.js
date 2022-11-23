"use strict";
var employee = {
    id: 1,
    greet: function () {
        console.log("Regular Function: " + this.id);
    }
};
var employee1 = {
    id: 1,
    greet: function () {
        setTimeout(function () { console.log("Timeout function: " + this.id); }, 1500);
    }
};
employee.greet();
// context has changed. this is called on timeout function and is therefore undefined
employee1.greet();
var employee2 = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () { console.log(" Using the self to replace this:  " + self.id); }, 1500);
    }
};
employee2.greet();
// using arrow functions for desired result
var employee3 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log("Arrow function syntax: " + _this.id); }, 1500);
    }
};
employee3.greet();
//# sourceMappingURL=tutorial11.js.map