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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const set = new Set(to_delete);
  const res = [];

  const go = (node) => {
    if (node == null) return node;
    node.left = go(node.left);
    node.right = go(node.right);

    if (set.has(node.val)) {
      if (node.left) res.push(node.left);
      if (node.right) res.push(node.right);
      return null;
    }
    return node;
  };

  if (!set.has(root.val)) res.push(root);
  go(root);
  return res;
};
