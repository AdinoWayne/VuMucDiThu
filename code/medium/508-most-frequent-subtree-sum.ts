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

function findFrequentTreeSum(root: TreeNode | null): number[] {
    const counts = {};
    const max = { val: -Infinity };
    dfs(root, counts, max);
    const sums = [];
    for (let key in counts) {
        if (counts[key] === max.val) sums.push(parseInt(key));
    }
    return sums;
};

function dfs(root, counts, max) {
    if (!root) return 0;
    let sum = root.val + dfs(root.left, counts, max) + dfs(root.right, counts, max);
    counts[sum] = (counts[sum] || 0) + 1;
    max.val = Math.max(max.val, counts[sum]);
    return sum;
}
