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

function bstToGst(root: TreeNode | null): TreeNode | null {
    const getSum = (node, sum) => {
        if (!node) return sum;
    
        node.val += getSum(node.right, sum);

        return getSum(node.left, node.val);
    };
    
    getSum(root, 0);

    return root;
};
// Time Complexity: O(N)
// Space Complexity: O(H), where H is the height of the BST (O(log N) in a balanced BST, but O(N) in the worst case for a skewed tree).
