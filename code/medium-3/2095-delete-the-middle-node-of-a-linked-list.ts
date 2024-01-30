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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head.next) return null;
    let prev = head;
    let slow = head;  
    let fast = head.next;
    let size = 2;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
        size += fast ? 2 : 1;
    }
    
    if (size % 2 === 0) slow.next = slow.next.next;
    else prev.next = slow.next;
    
    return head;
};
// TC O(n)
// SC O(1)
