const caesar = function (input, userInputShift) {
  // const regex = /[A-Za-z\s]/g;

  // Result string array
  let arrayToUnicode = [];
  
  // loop over the input String
  for (let i = 0; i < input.length; i++) {
    // get ASCII code for the current character in integer
    let element = input[i].codePointAt();
    // console.log(element);

    // check if the current element is alpha
    // shift the element and push the new ASCII number to array
    
    // A-Z
    if (element >= 65 && element <= 90) {
      let newAsciiCode = ((element + userInputShift) % 90) + 64;
      arrayToUnicode.push(String.fromCharCode(newAsciiCode));
    } 
    
    // a-z
    else if (element >= 97 && element <= 122){
      let newAsciiCode = ((element + userInputShift) % 122) + 96;
      arrayToUnicode.push(String.fromCharCode(newAsciiCode));              
    }    
    // if the current character is not alpha, just add to the result
    else {
    arrayToUnicode.push(element);              
    }
  }
  console.log(arrayToUnicode);

  return arrayToUnicode;
};

caesar("Hello, World!", 5);

module.exports = caesar;
