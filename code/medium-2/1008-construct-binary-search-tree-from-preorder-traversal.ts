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

function bstFromPreorder(preorder: number[]): TreeNode | null {
  let i = 0
  const process = (bound) => {
    if (i === preorder.length || preorder[i] > bound) {
      return null
    }
    const num = preorder[i]
    const node = new TreeNode(num)
    i++
    node.left = process(node.val)
    node.right = process(bound)
    return node
  }
  const root = process(Number.MAX_SAFE_INTEGER)
  return root
};

// TC O(n)
// SC O(n)
