/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
    if (root == null) return [];
    
    const values = [];
    const stackIn = [];
    const stackOut = [];
    stackIn.push(root);
    
    while (stackIn.length > 0) {
        const node = stackIn.pop();
        if (node.children) {
            const length = node.children.length;
            for (let i = 0; i < length; i++) {
                stackIn.push(node.children[i]);
            }
        }
        stackOut.push(node.val);
    }
    
    while (stackOut.length > 0) {
        stackIn.push(stackOut.pop());
    }
    
    return stackIn;
};
