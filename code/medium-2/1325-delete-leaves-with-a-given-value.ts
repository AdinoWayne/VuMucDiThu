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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    dfs(root, target);

    if (shouldDeleteSelf(root, target)) {
        root = null;
    }
    
    return root;
};

function shouldDeleteSelf(root: TreeNode | null, target: number): boolean {
    return !root.left && !root.right && root.val === target
}

function dfs(root: TreeNode | null, target: number): boolean {
    if (!root) return false;

    if (shouldDeleteSelf(root, target)) return true;

    const shouldDeleteLeft = dfs(root.left, target);
    const shouldDeleteRight = dfs(root.right, target);

    if (shouldDeleteLeft) root.left = null;
    if (shouldDeleteRight) root.right = null;

    return shouldDeleteSelf(root, target) ? true : false;
}
