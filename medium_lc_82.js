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
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      while (cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      prev.next = cur.next;
    } else {
      prev = prev.next;
    }
    cur = cur.next;
  }

  return dummy.next;
};
