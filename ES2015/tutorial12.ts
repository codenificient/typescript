var getValue = function (value=16) {
    console.log(value)
}

getValue()
getValue(27)

var getValue = function (value = 16, bonus=5) {
    console.log(`Value: ` + value, `Bonus: ` + bonus)
}

getValue(22)
getValue(71, 9)
getValue(undefined, 9)