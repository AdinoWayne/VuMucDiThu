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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (root === null) return;
    if (root.left) {
		// step 1
        var last = root.left;
        while (last.right !== null) last = last.right;
        // step 2
        var tmp = root.right;
		// step 3
        root.right = root.left;
		// step 4
        last.right = tmp;
		// step 5
        root.left = null;
    }
    
    flatten(root.right);
};
