/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

function flatten(head: Node | null): Node | null {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);

    let stack = [head];
    let current = dummyHead;
    let prev = null;

    while(stack.length!=0) {        
        current = stack.pop();
        
        if (prev) {
            current.prev = prev;
            prev.next = current;
        } 

        if (current.next!=null) stack.push(current.next);
        if (current.child!=null) { // has a child
            stack.push(current.child);
            current.child = null; // remove child reference
        }
        
        prev = current;   
    }
    
    return dummyHead.next;
};

// The time complexity of the flatten function is O(N), where N is the total number of nodes in the doubly-linked list.
// This is because the function visits every node in the list once. The space complexity of the function is O(N),
