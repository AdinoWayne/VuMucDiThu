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

function isSymmetric(root: TreeNode | null): boolean {
  const q = [root, root];
  while (q.length) {
    const [l, r] = [q.shift(), q.shift()];
    if (!l && !r) continue;
    if (!!l !== !!r || l.val !== r.val) return false;
    q.push(l.left, r.right, l.right, r.left);
  }
  
  return true;
};
