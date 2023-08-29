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

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    var list = []
    if (root1 != null) {
        list.push(root1.val)
        getVal(root1, list)
    }
    if (root2 != null) {
        list.push(root2.val)
        getVal(root2, list)
    }
    return list.sort((a, b) => a-b) // return the sorted list
}
var getVal = function(node, list) { // get the values recursively
    if (node.left!=null) {
        list.push(node.left.val) // add value to list
        getVal(node.left, list)
    }
    if (node.right!=null) {
        list.push(node.right.val) // add value to list
        getVal(node.right, list)
    }
}
// TC O(n)
// SC O(n)
