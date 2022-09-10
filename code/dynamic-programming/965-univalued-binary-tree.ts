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

function isUnivalTree(root: TreeNode | null): boolean {
    const val = root.val;
    let q = [];
    q.push(root);
    
    while(q.length !== 0) {
        let tmp = q.shift();
        
        if(tmp.val !== val) return false;
        if(tmp.left) q.push(tmp.left);
        if(tmp.right) q.push(tmp.right);
    }    
    return true;
};
