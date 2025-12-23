/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var recurse = function (left, right) {
    if (left < right) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      recurse(left + 1, right - 1);
    }
  };

  recurse(0, s.length - 1);
  return s;
};
