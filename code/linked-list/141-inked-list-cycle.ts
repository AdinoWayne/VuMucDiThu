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

function hasCycle(head: ListNode | null): boolean {
    if(!head) {
        return false;
    }
    let hare = head;
    let tortoise = head;
    while(hare) {
        if(!hare.next) {
            return false;
        } else {
            hare = hare.next.next;
            tortoise = tortoise.next;
        }
        if(tortoise == hare) {
            return true;
        }
    }
    return false;
};
