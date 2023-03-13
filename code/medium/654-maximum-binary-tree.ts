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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    let head = new TreeNode(max);
    head.left = constructMaximumBinaryTree(nums.slice(0, index));
    head.right = constructMaximumBinaryTree(nums.slice(index + 1));
    return head;
};
