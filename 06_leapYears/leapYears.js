function leapYears(inputYears) {
    let x = inputYears % 4;
    let y = inputYears % 100;
    let z = inputYears % 400;
    console.log(x);
    console.log(y);
    console.log(z);

    if (z == 0) {
        return true;
    } else if (y == 0) {
        return false;
    } else if (x == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYears(700))
// Do not edit below this line
module.exports = leapYears;
