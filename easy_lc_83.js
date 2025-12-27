/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var dummy = head;
  // 1 -> 1 -> 1 -> 1 -> 2 -> 3 -> null
  while (head && head.next) {
    while (head.next && head.val === head.next.val) {
      head.next = head.next.next;
    }
    head = head.next;
  }

  return dummy;
};
