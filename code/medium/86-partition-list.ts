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

function partition(head: ListNode | null, x: number): ListNode | null {
    let ptr = head;
    let less = new ListNode();
    let greater = new ListNode();
    const startPtrOfLess = less;
    const startPtrOfGreater = greater;
    let basePtr;
    
    let nextPtr;
    
    while(ptr) {        
        nextPtr = ptr.next;
        
        if (ptr.val < x) {
            less.next = ptr;            
            less = ptr;
        } else {
            greater.next = ptr;           
            greater = ptr;
        }
        
        ptr.next = null;
        ptr = nextPtr;
    }
    
    less.next = startPtrOfGreater.next;
    
    return startPtrOfLess.next;
};
