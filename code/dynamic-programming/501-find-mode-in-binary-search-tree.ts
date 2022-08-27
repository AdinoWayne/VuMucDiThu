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

function findMode(root: TreeNode | null): number[] {
    const output = [];
    if (!root) return output;
    const obj = {};
    const q = [root];
    let most = 0;
    
    while (q.length) {
        const cur = q.shift();
        if (obj[cur.val]) {
            obj[cur.val] += 1;
        } else {
            obj[cur.val] = 1;
        }

        if (obj[cur.val] > most) most = obj[cur.val];
        if (cur.left) q.push(cur.left);
        if (cur.right) q.push(cur.right);
    }
    
    for (let n in obj) {
        if (obj[n] === most) output.push(n);
    }
    
    return output;
};
