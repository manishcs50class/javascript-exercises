const fibonacci = function (num) {
    if (num < 0) {
        return 'OOPS'
    }

    const array1 = [1, 1];

    for (let i = 1; i < (num - 1); i++) {
        array1.push(array1[i] + array1[i - 1])
    }
    return array1.pop();
};
console.log(fibonacci(2))
// Do not edit below this line
module.exports = fibonacci;
