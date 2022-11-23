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

function sumNumbers(root: TreeNode | null): number {
    function traverse(node, num) {
        if(!node) return null;
        num += node.val
        if(!node.left && !node.right) return +num;
        return traverse(node.left, num) + traverse(node.right, num);
    }
    return traverse(root, '');
};
