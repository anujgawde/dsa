/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  var q = [root];

  var isPalindrome = function (arr) {
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

  while (q.length) {
    var qLen = q.length;
    var level = [];

    for (var i = 0; i < qLen; i++) {
      var node = q.shift();

      if (node === null) {
        level.push(null);
        continue;
      }

      level.push(node.val);
      q.push(node.left);
      q.push(node.right);
    }

    if (!isPalindrome(level)) {
      return false;
    }
  }

  return true;
};
