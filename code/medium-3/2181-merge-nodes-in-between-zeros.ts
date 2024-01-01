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

function mergeNodes(head: ListNode | null): ListNode | null {
    var res = new ListNode()
    var ans = res ;
    var current = head.next;
    var sum = 0;
    while(current){
              
            if(current.val != 0){
                sum = sum + current.val;
            }else{
                res.next = new ListNode(sum);
                sum = 0;
                res = res.next;
            }
        current = current.next;
            
    }
    return ans.next;
};
