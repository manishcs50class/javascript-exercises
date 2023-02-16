const palindromes = function (word) {
    const newWord = word.toLowerCase().replace(/[^A-Za-z]/g, '');
    console.log(newWord);

    let j = newWord.length;
    // let isPalindrome = false;
    for (i = 0; i < j / 2; i++) {
        if (newWord[i] !== newWord[j - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindromes('trees are seert )))'))
// Do not edit below this line
module.exports = palindromes;
