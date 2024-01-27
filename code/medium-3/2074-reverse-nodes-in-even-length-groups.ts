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

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
    let groupSize = 2;
    let start = head;
    let prev = head;
    let curr = head.next;
    let count = 0;
    while (curr != null) {
        if (count === groupSize) {
            if (groupSize % 2 === 0) { 
                const end = curr;
                const tail = start.next;
                reverseList(start, end, count); 
                start = tail; 
            }
            else {
                start = prev;
            }
            count = 0;
            ++groupSize;
        }
        else {
            prev = curr;        
            curr = curr.next;
            ++count;
        }
    }
    if (count % 2 === 0) {
         reverseList(start, null, count);
    }
    return head;
    function reverseList(start, end, count) {
        if (start.next == null) return start;
        let prev = start;
        let curr = start.next;
        let tail = start.next;
        for (let i = 0; i < count; ++i) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        start.next = prev;
        tail.next = end;
        return;
    }
};
// TC O(n2)
// SC O(1)
