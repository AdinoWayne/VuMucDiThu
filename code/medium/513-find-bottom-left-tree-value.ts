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

function findBottomLeftValue(root: TreeNode | null): number {
    let queue = [root];
    let node = root;
    while (queue.length){
        if(!queue){
            return;
        }
        node = queue.pop();
        if(node.right){
            queue.unshift(node.right);
        }
        if(node.left){
            queue.unshift(node.left);
        }
    }
    return node.val;
};
