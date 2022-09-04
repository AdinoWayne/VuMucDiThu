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

function minDiffInBST(root: TreeNode | null): number {
    let min = Infinity;
    
    const recurse = (node) => {
        if (!node) return;    
        getMin(node.val, node.left)
        getMin(node.val, node.right);
        recurse(node.left);
        recurse(node.right);
    }
    
    const getMin = (val, node) => {
        if (!node) return;
        min = Math.min(min, Math.abs(val - node.val));
        getMin(val, node.left);
        getMin(val, node.right);
    }
    
    recurse(root);
    
    return min;
};
