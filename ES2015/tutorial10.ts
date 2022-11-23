// arrow functions

var regValue = function () {
    return 10;
}

console.log(regValue())


const getArrowValue = () => {
    return 10;
}


console.log(getArrowValue())

const getNewArrow = () => 20
const getNewArrow1 = m => 20 * m
const getNewArrow2 = (m, n, p) => n + m - p

console.log(getNewArrow())
console.log(getNewArrow1(5))
console.log(getNewArrow2(7, 8, 3))