/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Find out where they get divided while traversing
  // The point they were split, is the lowest common ancestor

  var dfs = function (node) {
    if (!node) return null;

    if (node === p || node === q) {
      return node;
    }

    var left = dfs(node.left);
    var right = dfs(node.right);

    return left && right ? node : left ? left : right;
  };

  return dfs(root);
};
