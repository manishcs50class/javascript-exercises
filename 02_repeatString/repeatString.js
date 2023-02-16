function repeatString(inputString, num) {
    let repeatedString = '';

    if (num < 0) {
        repeatedString = "ERROR";

    } else {
        for (let i = 0; i < num; i++) {
            repeatedString += inputString;
        }
    }
    return repeatedString;
}


repeatString();
// Do not edit below this line
module.exports = repeatString;
