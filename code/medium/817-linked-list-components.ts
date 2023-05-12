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

function numComponents(head: ListNode | null, nums: number[]): number {
    let map=new Map();
    nums.map((item)=>{
        map.set(item,!0);
    });
    let c=0;
    while(head){
        if(map.has(head.val)){
		while(head&&map.has(head.val))
		head=head.next;
		c++;    
        }             
        if(head)
        head=head.next;
    }
    return c;  
};

<!--
Time complexity: O(n)
Space complexity: O(n)
-->
