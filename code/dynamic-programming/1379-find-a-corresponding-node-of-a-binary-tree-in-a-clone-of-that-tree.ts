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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    let queue = [original];
    let cloneQueue = [cloned];
    
    while(queue.length > 0) {
        let len = queue.length;
        for(let i=0; i<len; i++) {
            let node = queue.shift();
            let cloneNode = cloneQueue.shift();
                       
            if(node == target) {
                return cloneNode;
            }
            
            if(node.left) {
                queue.push(node.left);
                cloneQueue.push(cloneNode.left);
            }
            
            if(node.right) {
                queue.push(node.right);
                cloneQueue.push(cloneNode.right);
            }
            
        }
    }
};
