function canDrive(user) {
    console.log("user is", user.name);
    if (user.age >= 16)
        console.log("allowed to drive");
    else
        console.log("do not allow to drive");
}
var tom = {
    name: "Tom",
    age: 15
};
var jeni = {
    name: "Jenny",
    age: 19
};
canDrive(tom);
canDrive(jeni);
