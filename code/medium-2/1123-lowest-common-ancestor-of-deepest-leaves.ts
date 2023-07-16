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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
	
    const left = depth(root.left);
    const right = depth(root.right);
	
	// both subtrees would have the same depth 
	// if this node is the common ancestor of the deepest leaves
    if (left === right) return root;
	
	// otherwise, the common ancestor of the deepest leaves must be in the subtree whose depth is larger
    if(left > right) return lcaDeepestLeaves(root.left);
    return lcaDeepestLeaves(root.right);
};

// get the depth of tree
function depth(node){
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    return 1 + Math.max(left, right);
}
