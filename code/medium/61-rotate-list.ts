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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let tail = head;
  if (head === null) return head;
  let len = 1;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;
  let count = len - (k % len);
  while (count > 0) {
    head = head.next;
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};
