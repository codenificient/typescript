"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// }= {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// person.role.push('admin');
// person.role[1] = 15;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
var favoriteActivities;
favoriteActivities = ['Riding', 'Biking', 'Fencing'];
console.log(person.name);
console.log("List of hobbies\n");
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log("\n\n");
console.log("UpperCase Activities List: ");
for (var _b = 0, favoriteActivities_1 = favoriteActivities; _b < favoriteActivities_1.length; _b++) {
    var activity = favoriteActivities_1[_b];
    console.log(activity.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
