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

function printTree(root: TreeNode | null): string[][] {
    const M = heightOfTree(root);
    const matrix = generateMatrix(M);
    
    populate(root, matrix, 0, 0, matrix[0].length - 1);
    
    return matrix;
};

const populate = (node, matrix, level, L, R) => {
    if(!node) return;
    
    const middle = ((R - L) / 2) + L;
    matrix[level][middle] = node.val.toString();
    
    populate(node.left, matrix, level + 1, L, middle - 1);
    populate(node.right, matrix, level + 1, middle + 1, R);
};

const generateMatrix = (M) => {
    const n = (2 ** M) - 1;
    const matrix = new Array(M)
                    .fill('')
                    .map(row => new Array(n).fill(''));
    return matrix;   
};

const heightOfTree = (node) => {
    if(!node) return 0;
    
    const heightLeft = heightOfTree(node.left);
    const heightRight = heightOfTree(node.right);
    
    return 1 + Math.max(heightLeft, heightRight);
};
