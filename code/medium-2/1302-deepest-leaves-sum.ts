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

function deepestLeavesSum(root: TreeNode | null): number {
    if (!root)
        return 0;
    
    let cache = [];
    const rec = (root, depth = 0) => {
        if (!root)
            return 0;
        
        
        cache[depth] = (cache[depth] || 0) + root.val;
        
        rec(root.left, depth + 1);
        rec(root.right, depth + 1);
    }
    
    rec(root);
    return cache[cache.length - 1];  
};
// TC O(n)
// SC O(n)
