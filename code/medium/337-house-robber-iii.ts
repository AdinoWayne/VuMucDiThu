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

function rob(root: TreeNode | null): number {
    function helper(node: TreeNode | null): number[] {
        if(!node) return [0,0];
        let res = [];
        const [lr, ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        res[0] = node.val + ln + rn;
        res[1] = Math.max(lr, ln) + Math.max(rr, rn);
        return res;
    }
    
    return Math.max(...helper(root));
};

// Time complexity: O(n)
// Space complexity: O(1)
