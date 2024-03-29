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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }
    
	// Initialize
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Step1: build the prefix sum map
    let curr = dummy 
    let prefixSumMap = new Map(); 
    let runningSum = 0; 
    
    while (curr) {
        runningSum += curr.val;
        prefixSumMap.set(runningSum, curr);
        curr = curr.next;
    }
    
    // Step 2: build the output
    curr = dummy;
    runningSum = 0;
    
    while (curr) {
        runningSum += curr.val; 
        curr.next = prefixSumMap.get(runningSum).next;
        curr = curr.next; 
    }
    
    return dummy.next;
};
// TC O(n)
// SC O(n)
