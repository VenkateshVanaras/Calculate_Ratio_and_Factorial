const factorialOfNumber = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");

function ratioAndFactorial(a, b, c) {
  const ratio = ratioOfTwoNumbers(a, b);
  const factorial = factorialOfNumber(c);
  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
