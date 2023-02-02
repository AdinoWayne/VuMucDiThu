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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (root === null) return '';
    let result = [];
    serializeHelper(root, result);
    return result.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (!data) return null;
    const array = data.split(',');
    return deserializeHelper(array, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

const serializeHelper = function(node, result) {
    if (node) {
        result.push(node.val);
        serializeHelper(node.left, result);
        serializeHelper(node.right, result);
    }
};

const deserializeHelper = function(array, min, max) {
    if (array.length === 0) return null;
    let val = +array[0];
    if (val < min || val > max) return null;
    array.shift();
    let root = new TreeNode(val);
    root.left = deserializeHelper(array, min, val);
    root.right = deserializeHelper(array, val, max);
    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
