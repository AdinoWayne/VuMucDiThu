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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let res = [];

  const go = (node, lvl) => {
    if (node == null) return;
    if (res[lvl] == null) res[lvl] = [];

    if (lvl % 2 === 0) {
      res[lvl].push(node.val);
    } else {
      res[lvl].unshift(node.val);
    }

    go(node.left, lvl + 1);
    go(node.right, lvl + 1);
  };

  go(root, 0);
  return res;
};
