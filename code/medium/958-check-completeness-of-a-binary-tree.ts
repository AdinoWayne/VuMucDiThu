/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isCompleteTree(root: TreeNode | null): boolean {
    let seenNull = false;
    let queue = [root];
    
    while(queue.length) {
        const next = [];
        
        for(let nextNode of queue) {
            if(!nextNode) seenNull = true;
            else {
                if(seenNull) return false;
                next.push(nextNode.left);
                next.push(nextNode.right);
            }
        }
        queue = next;
    }
    return true;
};
