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

function splitListToParts(root: ListNode | null, k: number): Array<ListNode | null> {
    const res = new Array(k).fill(null); // will contain split linked list 
    let n = 0; // total # of nodes in the link list
    
    let curr = root;
    
    // count the # of nodes
    while (curr != null) {
        n++;
        curr = curr.next;
    }
    
    const width = Math.floor(n / k); // initial width of each linked list parts
    let rem = n % k; // remaining nodes
    
    let head = root;
    let tail = root;
    
    for (let i = 0; head != null; i++) {
        let m = width;
        
        if (rem > 0) {
            m += 1;
            rem--;
        }
        
        let tail = head;
        
        for (let j = 1; j < m; j++) {
            tail = tail.next;
        }
        
        const next = tail.next;
        tail.next = null;
        res[i] = head;
        head = next;
    }
    
    return res;
};
