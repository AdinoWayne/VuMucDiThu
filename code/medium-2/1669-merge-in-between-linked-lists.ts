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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let start = list1;
    let end = list1;
    
    for (let i = 0; i <= b && start != null && end != null; i++) {
        if (i < a - 1) start = start.next;
        if (i <= b) end = end.next;
    }
    
    let tail = list2;
    
    while (tail.next != null) {
        tail = tail.next;
    }
    
    start.next = list2;
    tail.next = end;
    
    return list1;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
