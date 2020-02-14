// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var prefix = Number(cardNumber[0] + cardNumber[1]);
  if(cardNumber.length === 14 && (prefix === 38 || prefix === 39)) {
    return 'Diner\'s Club'
  } else if (cardNumber.length === 15 && (prefix === 34 || prefix === 37)) {
    return 'American Express'
  }else if (cardNumber.length === 16 && (prefix === 51 || prefix == 52 || prefix == 53 || prefix == 54 || prefix === 55)) {
    return 'MasterCard'
  } else if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa'
  } else if (/^65|64[4-9]|6011/.test(cardNumber) && cardNumber.length === 16|19) {
    return 'Discover'
  } else if (/^5018|5020|5038|6304/.test(cardNumber) && /1[2-9]/.test(cardNumber.length)) {
    return 'Maestro'
  } else {
    return 'Invalid number, please enter a valid number'
  }
};

console.log(detectNetwork('630414432322346789'));