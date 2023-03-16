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

function trimBST(root: TreeNode | null, L: number, R: number): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (root.val > R) {
        // skip and go left
        return trimBST(root.left, L, R);
    }
    if (root.val < L) {
        // skip and go right
        return trimBST(root.right, L, R);
    }
    // connect left and right child to the next qualified node
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;  
};
