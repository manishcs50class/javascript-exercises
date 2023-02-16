function reverseString(inputString) {
    let reversedStrings = '';
    for (i = 1; i <= inputString.length; i++) {
        reversedStrings += inputString.charAt(inputString.length - i);
    }
    return reversedStrings
    // console.log(reverseStrings)
}
console.log(reverseString('hello'))
reverseString('hello');

// Do not edit below this line
module.exports = reverseString;