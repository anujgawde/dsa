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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  var count = 0;

  var dfs = function (node) {
    if (!node) return null;

    var left = dfs(node.left);
    if (left !== null) return left;

    count++;
    if (k === count) return node.val;

    return dfs(node.right);
  };

  return dfs(root);
};
