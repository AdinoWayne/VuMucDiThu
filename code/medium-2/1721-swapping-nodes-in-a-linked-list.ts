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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let node = head, first = head, second = head;
    for (let i = 1; i < k; i++) {
        node = node.next;
        second = second.next;
    };

    while (second.next !== null) {
        second = second.next;
        first = first.next;
    };
    
    let temp = first.val;
    first.val = node.val;
    node.val = temp;
    return head;
};
