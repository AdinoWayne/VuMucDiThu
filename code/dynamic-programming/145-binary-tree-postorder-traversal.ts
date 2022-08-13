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

function postorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    const recursive = (node) => {
        if(!node) return;

        if(node.left) recursive(node.left);
        if(node.right) recursive(node.right);
        result.push(node.val);
    }

    recursive(root);
    return result;
};
