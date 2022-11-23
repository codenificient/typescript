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

enum Role {
    ADMIN, READ_ONLY, AUTHOR
};


const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};


var favoriteActivities: any[];
favoriteActivities = ['Riding', 'Biking', 'Fencing'];

console.log(person.name);

console.log("List of hobbies\n")
for (const hobby of person.hobbies) {
    console.log(hobby);
}
console.log("\n\n");
console.log("UpperCase Activities List: ");

for (const activity of favoriteActivities) {
    console.log(activity.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}