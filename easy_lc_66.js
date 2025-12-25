/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // While it is 9, conver to zero, carry 1 until the end of line if no number found less than 9 in the middle.
  var index = digits.length - 1;
  var isAdded = false;

  while (index >= 0 && !isAdded) {
    if (digits[index] < 9) {
      isAdded = true;
      digits[index]++;
    } else {
      digits[index] = 0;
      index--;
    }
  }

  if (!isAdded) {
    digits.unshift(1);
  }

  return digits;
};
