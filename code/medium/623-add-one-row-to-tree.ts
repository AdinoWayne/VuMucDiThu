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

function addOneRow(root: TreeNode | null, v: number, d: number): TreeNode | null {
    if(d === 1) root = new TreeNode(v, root)
    
    let dfs = (node, level = 1) => {
        if(!node) return;
        
        if(level === d-1){
            node.left = new TreeNode(v, node.left)
            node.right = new TreeNode(v, null, node.right)
        }
        
        dfs(node.left, level+1)
        dfs(node.right, level+1)
    }
    
    dfs(root)
    
    return root
};
