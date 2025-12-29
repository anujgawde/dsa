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
 * @return {number}
 */
var maxDepth = function (root) {
  var recurse = function (root, depth) {
    if (!root) {
      return 0;
    }

    var left = recurse(root.left, depth + 1);
    var right = recurse(root.right, depth + 1);
    return Math.max(left, right);
  };

  return recurse(root, 0);
};
