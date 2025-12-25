/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // Given:
  // We have access to current node and the next node
  // Instead of removing the previous node's connection, which we do not have access to, remove the next node.
  node.val = node.next.val;
  node.next = node.next.next;
};
