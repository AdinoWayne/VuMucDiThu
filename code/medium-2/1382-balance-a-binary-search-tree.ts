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

function balanceBST(root: TreeNode | null): TreeNode | null {
    function inOrder(myRoot) {
        if(!myRoot) return [];
        return [...inOrder(myRoot.left), myRoot.val, ...inOrder(myRoot.right)]
    }
    const sortedArr = inOrder(root)
    
    function constructTree(arr) {
        if(!arr.length) return null;
        
        const mid = Math.floor(arr.length / 2);
        const node = new TreeNode(arr[mid])
        node.left = constructTree(arr.slice(0, mid));
        node.right = constructTree(arr.slice(mid+1));
        
        return node;
    }
    return constructTree(sortedArr);
};
// TC O(n)
// SC O(n)
