/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    let curr:Node = root;
    
    while (curr != null) {
        let start = null; // (1)
        let prev = null;
    
        while (curr != null) { // (2)
            if (start == null) { // (3)
                if (curr.left) start = curr.left;
                else if (curr.right) start = curr.right;
                
                prev = start; // (4)
            }
            
            if (prev != null) {
                if (curr.left && prev != curr.left) {
                    prev = prev.next = curr.left; // (5)
                }
                if (curr.right && prev != curr.right) {
                    prev = prev.next = curr.right;
                }
            }

            curr = curr.next; // (6)
        }
		
        curr = start; // (7)
    }
    
    return root;
};
