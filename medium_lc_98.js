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
var isValidBST = function (root) {
  var arr = [];

  var recurse = function (root) {
    if (root.left) recurse(root.left);
    arr.push(root.val);
    if (root.right) recurse(root.right);
  };

  recurse(root);

  if (arr.length <= 1) return true;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
};
