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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let current = head, start = head, position = 1;
    
    while(position < left) {
        start = current
        current = current.next;
        position ++;
    }
    
    let reversedList = null,  tail = current;
    
    while(position >= left && position <= right) {
        const next = current.next;
        current.next = reversedList;
        reversedList = current;
        current = next;
        position ++
    }
    start.next = reversedList;
    tail.next = current;
    
    return left > 1 ? head : reversedList
};
