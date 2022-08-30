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

function findTilt(root: TreeNode | null): number {
    let tot = 0;
    
    findSum(root);
    
    return tot;
    
    function findSum(node) {
        // base case
        if (node == null) return 0;
        
        const left = findSum(node.left);
        const right = findSum(node.right);
        
        const sum = left + right;
        
        tot += Math.abs(left - right);
        
        return sum + node.val;
    }
};
