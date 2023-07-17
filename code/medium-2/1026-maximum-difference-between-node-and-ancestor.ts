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

function maxAncestorDiff(root: TreeNode | null): number {
    if(root == null) { return 0; }
	
    let result = 0;
    helper(root, root.val, root.val);
    
    function helper(root, max, min) {
        if(root == null) {
            result = Math.max(result, max-min);
            return;
        }
        
        max = Math.max(max, root.val);
        min = Math.min(min, root.val);
        
        helper(root.left, max, min);
        helper(root.right, max, min);
    }

    return result;
};
// binary tree (left < val < right)
// Time complexity of the function is O(n) where n is the number of nodes in the tree.
// Space complexity is O(h) where h is the height of the tree
