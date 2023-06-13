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

function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  const res: number[] = [];

  const preorderTraverse = (node: TreeNode | null): boolean => {
    if (!node) return true;
    if (voyage[0] !== node.val) return false;
    voyage.shift();

    if (node.left && node?.left.val !== voyage[0]) {
      res.push(node.val);
      return preorderTraverse(node.right) && preorderTraverse(node.left);
    }
    return preorderTraverse(node.left) && preorderTraverse(node.right);
  };
  return preorderTraverse(root) ? res : [-1];
};
