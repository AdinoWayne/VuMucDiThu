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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return helper(root1)===helper(root2);
};


var helper=function(root){
    var op=[];
    inorder(root,op);
    return op.join(",");
}

var inorder=function(root,op){
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        op.push(root.val);
    }
    inorder(root.left,op);
    inorder(root.right,op);
}
