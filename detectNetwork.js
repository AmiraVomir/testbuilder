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
  var prefix1 = Number(cardNumber.slice(0,1));
  var prefix2 = Number(cardNumber.slice(0,2));
  var prefix3 = Number(cardNumber.slice(0,3));
  var prefix4 = Number(cardNumber.slice(0,4));
  var prefix5 = Number(cardNumber.slice(0,5));
  var prefix6 = Number(cardNumber.slice(0,6));

  function getPrefix(prefixNumber, possiblePrefix) {
    for (var i = 0; i < possiblePrefix.length; i++) {
      if (possiblePrefix[i] === prefixNumber) {
        return true;
      }
    }
    return false;
  }

  function getLength(cardLength, possibleLength) {
    for (var j = 0; j < possibleLength.length; j++) {
      if (possibleLength[j] === cardLength) {
        return true;
      }
    }
    return false;
  }
  //Diner's Club
  if (getLength(cardNumber.length, [14]) && getPrefix(prefix2, [38,39])) {
    return 'Diner\'s Club'
  }
  //American Express
  if (getLength(cardNumber.length, [15]) && getPrefix(prefix2, [34, 37])) {
    return 'American Express'
  }
  //MasterCard
  if (getLength(cardNumber.length, [16]) && getPrefix(prefix2, [51,52,53,54,55])) {
    return 'MasterCard'
  }
  //Visa
  var notSwitch = true;
  if (getPrefix(prefix4, [4903, 4905, 4911, 4936])){
    notSwitch = false;
  }
  if (getLength(cardNumber.length, [13, 16, 19]) && getPrefix(prefix1, [4]) && notSwitch) {
    return 'Visa'
  }
  //Discover
  if (getLength(cardNumber.length, [16, 19]) && (getPrefix(prefix2, [65]) || getPrefix(prefix3, [644, 645,646, 647, 648, 649]) || getPrefix(prefix4, [6011]))) {
    return 'Discover'
  }
  //Maestro
  var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19]
  if (getLength(cardNumber.length, maestroLength) && getPrefix(prefix4, [5018, 5020, 5038, 6304])) {
    return 'Maestro'
  }
  //China UnionPay
  var chinaPrefix1 = [624, 625, 626];
  var chinaPrefix2 = [6282,6283, 6284, 6285, 6286, 6287,6288]
  var chinaPrefix3 = [];
  for (var i = 622126; i <= 622925; i++) {
    chinaPrefix3.push(i);
  }
  if (getLength(cardNumber.length, [16, 17, 18, 19]) && getPrefix(prefix3, chinaPrefix1) || getPrefix(prefix4, chinaPrefix2) || getPrefix(prefix6, chinaPrefix3)) {
    return 'China UnionPay'
  }
  //Switch
  var switchPrefix1 = [4903, 4905, 4911, 4936, 6333, 6759];
  var switchPrefix2 = [564182, 633110];
  if (getLength(cardNumber.length, [16, 18, 19]) && getPrefix(prefix4, switchPrefix1) || getPrefix(prefix6, switchPrefix2)) {
    return 'Switch'
  }
} ;

console.log(detectNetwork('38123456789012'));