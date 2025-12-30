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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var q = [root];
  var result = [];

  while (q.length) {
    var qLen = q.length;
    var level = [];

    for (var i = 0; i < qLen; i++) {
      var node = q.shift();
      if (node === null) {
        continue;
      }

      level.push(node.val);
      q.push(node.left);
      q.push(node.right);
    }
    if (level.length) {
      result.push(level);
    }
  }

  return result;
};
