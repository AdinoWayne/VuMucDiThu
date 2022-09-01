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

function averageOfLevels(root: TreeNode | null): number[] {
    const sum = [];
    const count = []
    const traverse = (node, i) => {
        if(sum[i] === undefined) sum[i] = 0;
        if(count[i] === undefined) count[i] = 0;
        sum[i] += node.val;
        count[i]++;
        if(node.left) traverse(node.left, i + 1);
        if(node.right) traverse(node.right, i + 1)
    }
    traverse(root, 0)
    for(let i = 0; i < sum.length; i++){
        sum[i] = sum[i] / count[i]
    }
    return sum;
};
