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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    const arr = [];
    populateSum(root, 0, arr);
    updateSum(root, 0, arr, 0);
    return root;
};

function populateSum ( root, level, sumArr ) {
    if ( root === null ) return;
    sumArr[level] = (sumArr[level] ?? 0) + root.val;
    populateSum(root.left, level + 1, sumArr);
    populateSum(root.right, level + 1, sumArr);
}
function updateSum ( root, siblingVal, sumArr, level ) {
    if ( root === null ) return;
    const leftVal = root.left?.val ?? 0;
    const rightVal = root.right?.val ?? 0;
    root.val = sumArr[level] - ( root.val + siblingVal );;
    updateSum(root.left, rightVal, sumArr, level + 1);
    updateSum(root.right, leftVal, sumArr, level + 1);
}
