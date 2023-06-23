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

function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
    const r = recurse(root, val)
    return r
    
}

var recurse = (node, val) => {
    if(!node){
        let temp = new TreeNode(val)
        return temp
    }else{
        if(node.val < val){
            let temp = new TreeNode(val)
            temp.left = node
            return temp
        }else{
            node.right = recurse(node.right, val)
            return node
        }    
    }
    
}
