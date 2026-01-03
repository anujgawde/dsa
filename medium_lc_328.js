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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  var oddList = head;
  var evenList = head.next;
  var evenListHead = evenList;

  while (evenList && evenList.next) {
    oddList.next = evenList.next;
    oddList = oddList.next;

    evenList.next = oddList.next;
    evenList = evenList.next;
  }
  oddList.next = evenListHead;
  return head;
};
