/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  var left = new ListNode(),
    right = new ListNode();
  var lDummy = left,
    rDummy = right;

  while (head) {
    if (head.val < x) {
      lDummy.next = head;
      lDummy = lDummy.next;
    } else {
      rDummy.next = head;
      rDummy = rDummy.next;
    }
    head = head.next;
  }
  lDummy.next = right.next;
  rDummy.next = null;

  return left.next;
};
