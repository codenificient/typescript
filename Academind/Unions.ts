// accepting multiple types of inputs

type Combinable = number | string;
type Convertible = 'as-number' | 'as-text';
    
function combine(num1: Combinable, num2: Combinable) {
    let result;
    if (typeof num1 === 'number' && typeof num2 === 'number') result = num1 + num2;
    else result = num1.toString() + num2.toString();

    return result;
}

const combineAges = combine(30, 56);
console.log('The combined ages of two peoples ages 30 and 56 is ', combineAges);

const combineNames = combine('Max', 'Anna');
console.log('\n\nThe value of combined names Max and Anna is ', combineNames);