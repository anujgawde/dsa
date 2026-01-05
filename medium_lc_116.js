/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root || !root.left) return root;

  var cur = root,
    next = root.left;

  while (cur && next) {
    cur.left.next = cur.right;

    if (cur.next) {
      cur.right.next = cur.next.left;
    }

    cur = cur.next;

    if (!cur) {
      cur = next;
      next = cur.left;
    }
  }

  return root;
};
