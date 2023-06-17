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

function distributeCoins(root: TreeNode | null): number {
    var moves = 0;
    postorder(root);
    return moves;
    
    function postorder(node){
        if(!node)
            return 0;
        
        const subTotal = postorder(node.left) + postorder(node.right);
        const result = node.val - 1 + subTotal;
        moves += Math.abs(result);
        
        return result;
            
    }
};
