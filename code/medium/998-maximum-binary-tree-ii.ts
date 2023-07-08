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

function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
    const r = recurse(root, val)
    return r
    
}

var recurse = (node: TreeNode | null, val: number): TreeNode | null => {
    if (!node) {
        let temp = new TreeNode(val);
        return temp;
    } else {
        if (node.val < val) {
            let temp = new TreeNode(val);
            temp.left = node;
            return temp;
        } else {
            node.right = recurse(node.right, val);
            return node;
        }    
    }
}
// TC O(n)
// SC O(n)

// recursion on the right when root.val > val, because new element will be inserted at the end of the list.
// According to the previous problem: The right child of root will be Construct([A[i+1], A[i+2], ..., A[A.length - 1]]).

// the given tree was constructed from an list A (root = Construct(A)). So, List A = new ArrayList();
// Suppose B is a copy of A with the value val appended to it. So, B = new ArrayList(A) and B.add(val);
// The left child of root will be Construct([A[0], A[1], ..., A[i-1]]),
// The right child of root will be Construct([A[i+1], A[i+2], ..., A[A.length - 1]]).
// in this case A represent B, B[B.length-1] = val, So.
// If val is the largest, i = B.length-1, the root node's value is val, i=0 to i-1 are in the left child of root.
// This explains why when val > root.val, root should be the left child of new node with value val.
// Else val is not the largest, the new node with value val is always the right child of root.
