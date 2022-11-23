// core data types

function add(n1: number, n2: number, result: boolean , phrase: string ) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
}

const number1 = 5;
const number2 = 98.30;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);

// display to screen
const change = document.querySelector('root');

