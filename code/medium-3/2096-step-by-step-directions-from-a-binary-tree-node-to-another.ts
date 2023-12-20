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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    const getPath = (node, value, acc='') => {
        if (node === null) {
            return '';
        } else if (node.val === value) {
            return acc;
        } else {
            return getPath(node.left, value, acc + 'L') + getPath(node.right, value, acc + 'R')
        }
    }
    
	// generate the paths
    let startPath = getPath(root, startValue);
    let destPath = getPath(root, destValue);
    
    // find the lowest common ancestor
    let i = 0;
    for (; i < startPath.length && i < destPath.length && startPath[i] === destPath[i]; i++);
    
	// output the final path
    let output = '';
    for (let j = i; j < startPath.length; j++) {
        output += 'U';
    }
    
    return output + destPath.substring(i);
};
