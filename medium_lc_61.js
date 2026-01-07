/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  var length = 1;
  var tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;

  tail.next = head;

  var stepsToNewTail = length - k;
  var newTail = tail;

  while (stepsToNewTail > 0) {
    newTail = newTail.next;
    stepsToNewTail--;
  }

  var newHead = newTail.next;
  newTail.next = null;

  return newHead;
};
