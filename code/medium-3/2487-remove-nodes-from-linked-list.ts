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

function removeNodes(head: ListNode | null): ListNode | null {
    if(!head) return null
    
    head.next = removeNodes(head.next)
    
    if(head.next && head.val < head.next.val) return head.next
    
    return head
};
// TC O(n)
// SC O(n)
