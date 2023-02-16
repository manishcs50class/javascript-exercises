function sumAll(integerOne, integerTwo) {
    let sum = 0;

    if (typeof integerOne !== 'number' || Math.sign(integerOne) !== 1) {
        return 'ERROR';
    } else if (typeof integerTwo !== 'number' || Math.sign(integerTwo) !== 1) {
        return 'ERROR';
    }

    if (integerOne > integerTwo) {
        // swap integer values
        temp = integerOne;
        integerOne = integerTwo;
        integerTwo = temp;
    }

    for (i = integerOne; i <= integerTwo; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumAll(10, '90'));
// Do not edit below this line
module.exports = sumAll;
