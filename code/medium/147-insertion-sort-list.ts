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

function insertionSortList(head: ListNode | null): ListNode | null {
    var before = { val: -Number.MAX_VALUE, next: null };
    
    while (head) {
        var prev = before;
        
        // find prev
        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        
        var next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    
    return before.next;
};
