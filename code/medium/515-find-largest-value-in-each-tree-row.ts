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

function largestValues(root: TreeNode | null): number[] {
    if(!root) return []
    let queue = [];
    let results = [];
    queue.push(root)
    while(queue.length){
        const length = queue.length;
        let max = -Infinity;
        for(let i=0; i<length; i++){
            let node = queue.shift();
            if(max < node.val) max = node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        results.push(max);
    }
    return results
};
