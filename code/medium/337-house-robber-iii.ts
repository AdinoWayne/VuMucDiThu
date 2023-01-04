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
    function helper(node){
        if(!node) return [0,0];
        const [lr,ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        return [node.val + ln + rn, Math.max(lr+rr, ln+rn, lr+rn, ln+rr)];
    }
    
    return Math.max(...helper(root));
};
