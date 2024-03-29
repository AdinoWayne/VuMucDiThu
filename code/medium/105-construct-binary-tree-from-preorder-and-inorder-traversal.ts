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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) return null; // sanity check

        var value = preorder[p1],           // get the root value
            index = inorder.indexOf(value), // get inorder position
            nLeft = index - i1,             // count nodes in left subtree
            root  = new TreeNode(value);    // build the root node

        // build the left and right subtrees recursively
        root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
        root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

        return root;
    }
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
