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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return head
    var cur = head
    
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
};
