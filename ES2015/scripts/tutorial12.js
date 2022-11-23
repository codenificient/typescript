"use strict";
var getValue = function (value) {
    if (value === void 0) { value = 16; }
    console.log(value);
};
getValue();
getValue(27);
var getValue = function (value, bonus) {
    if (value === void 0) { value = 16; }
    if (bonus === void 0) { bonus = 5; }
    console.log("Value: " + value, "Bonus: " + bonus);
};
getValue(22);
getValue(71, 9);
getValue(undefined, 9);
//# sourceMappingURL=tutorial12.js.map