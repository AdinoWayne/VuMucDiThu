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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    const ans = head;
    let l = head;
    
    while (l && l.next) {
        l.next = new ListNode(gcd(l.val, l.next.val), l.next);
        l = l.next.next;
    }
        
    return ans;
};

var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
