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

function middleNode(head: ListNode | null): ListNode | null {
    let targetLen = Math.ceil(getLength(head)/2);
    return returnAtPosition(head, targetLen);
};

let getLength = function(node) {
    let length = 0;
    while(node.next) {
        length += 1;
        node = node.next;
    }
    return length;
};

let returnAtPosition = function(node, targetLen) {
    for(let i = 0; i < targetLen; i++) {
        node = node.next;
    }
    return node;
};
