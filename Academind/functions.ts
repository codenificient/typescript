function add(n1: number, n2: number) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

// function printResult(num: number): undefined {
//     console.log('Result: ' + num);
//     return;
// }

printResult(add(5, 87));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 9));

function addAndHandle(numa: number, numb: number, cb: (num: number) => void) {
    const result = numa + numb;
    cb(result);
}

addAndHandle(10, 67, (result) => {
    console.log(result);
})