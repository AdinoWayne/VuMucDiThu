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

function isEvenOddTree(root: TreeNode | null): boolean {
    let stack = [root]
    let level = 1
    
    while(stack.length>0) {
        let prev = level % 2 === 0 ? Infinity : -Infinity
        
        for (let i=stack.length-1; i>=0; i--) {
            let node = stack.shift()            

            if (level % 2 === 0 && (node.val % 2 !== 0 || prev <= node.val)) return false
            else if (level % 2 !== 0 && (node.val % 2 === 0 || prev >= node.val)) return false 

            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
            
            prev = node.val
        }
        
        level++
    }
    
    return true 
};
// TC O(n)
// SC O(n)
