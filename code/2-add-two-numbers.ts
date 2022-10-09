/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  return add(list1, list2, 0);
  
  function add(l1, l2, carry) {
    const v1 = (l1 && l1.val) || 0;
    const v2 = (l2 && l2.val) || 0;
    const sum = v1 + v2 + carry;
    const newCarry = Math.floor(sum / 10);
    const val = sum % 10;
    return (l1 || l2 || carry) ? { val, next: add(l1 && l1.next, l2 && l2.next, newCarry) } : null;
  };
};
