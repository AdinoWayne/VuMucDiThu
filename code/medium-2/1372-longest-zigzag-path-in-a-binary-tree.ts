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
const LEFT = 0
const RIGHT = 1
let ans = 0

function longestZigZag(root: TreeNode | null): number {
    ans = 0
    const left = 1 + recLongestZigZag(root.left, LEFT)
    const right = 1 + recLongestZigZag(root.right, RIGHT)
    ans = Math.max(
        left,
        right,
        ans,
    )
    return ans
}

const recLongestZigZag = (root, dir) => {
    if (root === null) return -1
    const left = 1 + recLongestZigZag(root.left, LEFT)
    const right = 1 + recLongestZigZag(root.right, RIGHT)
    ans = Math.max(ans, left, right)
    return dir === LEFT ? right : left
}
// TC O(n)
// SC O(n)
