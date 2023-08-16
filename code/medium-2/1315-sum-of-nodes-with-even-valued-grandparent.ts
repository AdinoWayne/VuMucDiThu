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

function sumEvenGrandparent(root: TreeNode | null, grandpaEven = false, fatherEven = false): number {
  if (!root) return 0;
  const isEven = root.val % 2 === 0
  const left = sumEvenGrandparent(root.left, fatherEven, isEven);
  const right = sumEvenGrandparent(root.right, fatherEven, isEven);
  return left + right + (grandpaEven ? root.val : 0);
};
