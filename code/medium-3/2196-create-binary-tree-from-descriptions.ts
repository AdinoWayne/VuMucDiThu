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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    let hash = {};
  let rootHash = {};
  for (let i = 0; i < descriptions.length; i++) {
    if (!(descriptions[i][0] in hash)) hash[descriptions[i][0]] = new TreeNode(descriptions[i][0]);
    if (!(descriptions[i][1] in hash)) hash[descriptions[i][1]] = new TreeNode(descriptions[i][1]);
    if (descriptions[i][2] == 1) hash[descriptions[i][0]].left = hash[descriptions[i][1]];
    else hash[descriptions[i][0]].right = hash[descriptions[i][1]];
    if (!(descriptions[i][0] in rootHash)) rootHash[descriptions[i][0]] = true;
    if (!(descriptions[i][1] in rootHash)) rootHash[descriptions[i][1]] = false;
    rootHash[descriptions[i][1]] = false;
  }
  for (let key in rootHash) {
    if (rootHash[key] == true) return hash[key];
  }
};
