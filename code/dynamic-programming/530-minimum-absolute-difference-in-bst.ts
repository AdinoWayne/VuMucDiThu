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

function getMinimumDifference(root: TreeNode | null): number {
  let pre = undefined;
  let diff = Infinity;
  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    if (pre !== undefined && diff > root.val - pre) {
      diff = root.val - pre;
    }
    pre = root.val;
    inOrder(root.right);
  }
  inOrder(root);
  return diff;
};
