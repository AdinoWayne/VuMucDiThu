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

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    // goal is to merge t2 to t1
    
    // if one of the node missing, return the other
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    }
    // if both nodes exist, sum the values
    t1.val += t2.val;
    
    // do the same thing for left and right branch
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    
    // return the merged t1
    return t1;
};
