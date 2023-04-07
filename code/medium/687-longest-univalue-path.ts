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

function longestUnivaluePath(root: TreeNode | null): number {
   let level = 0 
   function helper( parent, current) {
		if (current === null) return 0
		let left = helper(current.val, current.left)
		let right = helper(current.val, current.right)
		level = Math.max(level, left + right)
		return current.val === parent ? Math.max(left, right) + 1 : 0
    
   }
   if (root !== null) helper(root.val, root)
   return level
};
// Time complexity: O(n) where n is the number of nodes in the binary tree
// Space complexity: O(h) where h is the height of the binary tree
