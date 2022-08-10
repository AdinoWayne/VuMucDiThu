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

function isBalanced(root: TreeNode | null): boolean {
    function getHeight(node) {
        if (node === null) return 0;
        return Math.max( getHeight(node.left), getHeight(node.right) ) + 1;
    }
    
    if (root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) && 
        Math.abs( getHeight(root.left) - getHeight(root.right) ) < 2;
};
