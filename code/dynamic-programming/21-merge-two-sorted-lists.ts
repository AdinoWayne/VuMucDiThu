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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};
