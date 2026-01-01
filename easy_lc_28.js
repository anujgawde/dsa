/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var left = 0;
  while (left <= haystack.length - needle.length) {
    var counter = 0;
    while (counter < needle.length) {
      if (needle[counter] !== haystack[left + counter]) {
        break;
      }
      counter++;
    }
    if (counter === needle.length) {
      return left;
    }

    left++;
  }

  return -1;
};
