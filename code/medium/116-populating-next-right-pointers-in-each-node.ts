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
    if (root == null) return root;
    let queue = [root];
    while(queue.length!=0) {
        let next = [];
        while(queue.length!=0) {
            let node: Node = queue.shift();
            node.next = queue[0]||null;
            if (node.left!=null) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};
