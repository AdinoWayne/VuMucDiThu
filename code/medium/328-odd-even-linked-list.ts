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

function oddEvenList(head: ListNode | null): ListNode | null {
    if(head != null){
        
        let odd = head, even = head.next, evenHead = even;
        
        while(even && even.next != null){
            odd.next = even.next;
		    odd = odd.next;
		    even.next = odd.next;
		    even = even.next;
        }
        odd.next = evenHead;
    }
    return head;
};

// TC O(n)
// SC O(1)
