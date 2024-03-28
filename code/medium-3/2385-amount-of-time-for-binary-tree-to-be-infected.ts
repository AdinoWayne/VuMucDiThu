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

function amountOfTime(root: TreeNode | null, start: number): number {
    let amount = 0; 
    const getTimeOfSubtree = (node) =>{
        if(!node) return 0;
        const left = getTimeOfSubtree(node.left);
        const right = getTimeOfSubtree(node.right);
        if(node.val == start){
            amount = Math.max(left, right);
            return -1;
        }else if(left >=0 && right >=0){
            return Math.max(left, right) +1
        }else{
            amount = Math.max(amount, Math.abs(left -right));
            return Math.min(left, right) -1;
        }
    }
    getTimeOfSubtree(root);
    return amount;
};
// TC O(n)
// SC O(n)
