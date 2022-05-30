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

function binaryTreePaths(root: TreeNode | null): string[] {
    var mark = "->";
    var ret = [];
    if(root===null){
        return ret;
    }
    function deepsearch(node: TreeNode | any): void {
        if(node.left===null&&node.right===null){
            ret.push(node.val+"");
            return;
        }
        if(node.left!==null){
            node.left.val = node.val + mark + node.left.val;
            deepsearch(node.left);
        }
        if(node.right!==null){
            node.right.val = node.val + mark + node.right.val;
            deepsearch(node.right);
        }
    }
    deepsearch(root);
    return ret;
};
