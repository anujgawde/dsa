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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  var dfs = function (node) {
    // In case null is hit
    if (!node) {
      return {
        lca: null,
        depth: 0,
      };
    }

    var left = dfs(node.left);
    var right = dfs(node.right);

    if (left.depth === right.depth) {
      return {
        lca: node,
        depth: 1 + right.depth,
      };
    }

    if (left.depth > right.depth) {
      return {
        lca: left.lca,
        depth: 1 + left.depth,
      };
    }

    return {
      lca: right.lca,
      depth: 1 + right.depth,
    };
  };

  return dfs(root).lca;
};
