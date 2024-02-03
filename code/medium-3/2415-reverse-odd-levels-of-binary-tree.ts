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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        const next = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        }
        
        if (level % 2) {
            for (let i = 0, j = queue.length - 1; i < j; i++, j--) {
                const temp = queue[i].val;
                queue[i].val = queue[j].val;
                queue[j].val = temp;
            }
        }
        
        queue = next;
        level++;
    }
    
    return root;
};
