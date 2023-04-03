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

function widthOfBinaryTree(root: TreeNode | null): number {
    const minPos = [0];
    let maxWidth = 0;
    
    callDFS(root, 0, 0);
    return maxWidth;
    
    function callDFS(node, level, pos) {
        if(!node) return;
        if(minPos[level] === undefined) minPos.push(pos);
        
        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff+1);
        
        callDFS(node.left, level+1, diff*2);
        callDFS(node.right, level+1, diff*2+1);
    }
};
// The time complexity is O(N), where N is the number of nodes
// The space complexity is O(H), where H is the height of the binary tree.
