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

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
    const MIN = Number.MIN_SAFE_INTEGER;
    const sum = removeNodes(root, 0);
    
    if (sum < limit) return null;
    
    return root;
    
    function removeNodes(node, prevSum) {
        if (node == null) return MIN;
        if (node.left == node.right) return node.val + prevSum;
        
        const leftSum = removeNodes(node.left, prevSum + node.val);
        const rightSum = removeNodes(node.right, prevSum + node.val);
        
        if (leftSum < limit) node.left = null;
        if (rightSum < limit) node.right = null;
        
        if (node.left == node.right) return MIN;
        
        return node.left == null ? rightSum : leftSum;
    }
};
// TC O(n)
// SC O(h)
