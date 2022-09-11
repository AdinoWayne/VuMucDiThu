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

function sumRootToLeaf(root: TreeNode | null): number {
    const callDFS = (node, str) => {
        if(!node) return 0;
        str += node.val
        if(!node.left && !node.right) return parseInt(str, 2);
        return callDFS(node.right, str) + callDFS(node.left, str);
    }
    return callDFS(root, '');
};
