/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // Create a map with key as letter and value as the count(object);
  // Iterate through s and check if each letter is unique, if yes return
  // Return -1 if not found in s's iteration
  // Note: When iterating through s, the order will be preserved, we will return the first occurence automatically since we will iterate from the start.
  var map = {};

  for (const element of s) {
    map[element] = (map[element] || 0) + 1;
  }

  for (var i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
