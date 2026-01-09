/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };

  var res = [];

  var recurse = function (string, index) {
    if (string.length === digits.length) {
      res.push(string);
      return;
    }

    for (const character of letterMap[digits[index]]) {
      recurse(string + character, index + 1);
    }
  };

  recurse("", 0);

  return res;
};
