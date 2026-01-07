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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var res = [];
  if (!root) return res;

  var stack = [root];

  while (stack.length > 0) {
    var poppedElement = stack.pop();
    res.push(poppedElement.val);

    if (poppedElement.right) {
      stack.push(poppedElement.right);
    }
    if (poppedElement.left) {
      stack.push(poppedElement.left);
    }
  }

  return res;
};
