function ftoc(userInputFtoC) {
  // const userInputFtoC = prompt('Enter a temperature');
  resultFtoC = (userInputFtoC - 32) * 5 / 9;
  return Number(resultFtoC.toFixed(1));
}

ftoc(32)
const ctof = function (userInputCtoF) {
  // userInputCtoF = prompt('Enter a temperature');
  resultCtoF = (userInputCtoF * 9 / 5) + 32;
  return Number(resultCtoF.toFixed(1));
}

ctof(0)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
