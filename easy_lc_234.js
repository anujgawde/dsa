/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var fast = head,
    slow = head;

  // This will position slow to the middle of the list and point to the second part of the list
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  var second = slow.next;
  slow.next = null;

  // This will bring secondPre to the end of second part as a separate list and its end will point to null;
  var secondPre = null;
  while (second) {
    var temp = second.next;
    second.next = secondPre;
    secondPre = second;
    second = temp;
  }

  // Compare secondPre and head;
  while (secondPre && head) {
    if (secondPre.val !== head.val) {
      return false;
    }
    secondPre = secondPre.next;
    head = head.next;
  }

  return true;
};
