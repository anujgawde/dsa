/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  var idx = 0;

  var recurse = function (min, max) {
    if (idx >= preorder.length) return null;

    var cur = preorder[idx];

    if (cur <= min || cur >= max) {
      return null;
    }

    idx++;
    var node = new TreeNode(cur);

    node.left = recurse(min, cur);
    node.right = recurse(cur, max);

    return node;
  };

  return recurse(-Infinity, Infinity, idx);
};
