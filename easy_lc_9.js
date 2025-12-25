/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  var arr = [];

  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  var left = 0,
    right = arr.length - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
