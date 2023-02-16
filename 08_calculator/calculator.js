function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

const sum = function (inputArray) {
  return inputArray.reduce((a, b) => a + b, 0)
};
const multiply = function (inputArray) {
  return inputArray.reduce((a, b) => a * b, 1)
};


const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (a) {
  if (a == 0 || a == 1) {
    return 1
  }

  let result = 1;
  for (i = a; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
