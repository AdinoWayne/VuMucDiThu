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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
   return dfs(root, 0, targetSum);
};


var dfs = function(curr, currentSum, targetSum) {
    if (!curr) {
        return false;
    }

    currentSum += curr.val;
    
    if (curr.left === null && curr.right === null) {
        return currentSum === targetSum;
    }
    
    return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
}
