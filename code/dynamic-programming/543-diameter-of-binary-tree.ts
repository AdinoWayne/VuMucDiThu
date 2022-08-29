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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let dia = 0;
    function helper(root) {
        if (!root) return -1;

        const lh = 1 + helper(root.left);
        const rh = 1 + helper(root.right);
        dia = Math.max(dia, lh + rh);
        return Math.max(lh, rh);
    }
    helper(root);
    return dia;
};
