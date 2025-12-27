/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var res = "";

  // Iterating through each character of the first string
  for (var k = 0; k < strs[0].length; k++) {
    // Iterating through each element of the array, and comparing it with the index of the first string with the index of the string we are currently on
    for (var i = 0; i < strs.length; i++) {
      // if there is no index at the current string or the characters dont match
      if (!strs[i][k] || strs[0][k] !== strs[i][k]) {
        return res;
      }
    }
    res = res.concat(strs[0][k]);
  }
  return res;
};
