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

function nextLargerNodes(head: ListNode | null): number[] {
    let output = [];
    let stack = [];
    let idx = 0;
    while (head) {
        for (let i = stack.length -1; i >= 0; i--){
            if (stack[i].val < head.val) {
                output[stack[i].index] = head.val;
                stack.pop();
            }
        }
        stack.push({index: idx, val: head.val});
        head = head.next;
        idx+=1;
    }
    for (let s of stack) output[s.index] = 0
    return output;
};

// TC O(n)
// SC O(n)
