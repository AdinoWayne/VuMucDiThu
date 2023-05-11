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

function pruneTree(root: TreeNode | null): TreeNode | null {
	function containsOne(node) {
		if (node == null) 
			return false;
			
		const leftContainsOne = containsOne(node.left);
		const rightContainsOne = containsOne(node.right);
		
		 if (!leftContainsOne) 
			node.left = null;
			
		if (!rightContainsOne) 
			node.right = null;
			
		return node.val == 1 || leftContainsOne || rightContainsOne;
	}
	
	return containsOne(root) ? root : null;
};

<!-- 
DFS
Time complexity: O(n)
Space comlexity: O(n)
-->
