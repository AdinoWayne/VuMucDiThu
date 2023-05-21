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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    const map = {}; let i = 0;
    
    for(let i = 0; i < postorder.length; i++) {
        map[postorder[i]] = i;
    }
    
    function callDFS(start, end) {
        if(start > end || i >= preorder.length) return null;
        const node = preorder[i++], idx = map[preorder[i]];
        const tree = new TreeNode(node);
        if(idx < start || idx > end) return tree;
        tree.left = callDFS(start, idx);
        tree.right = callDFS(idx+1, map[node]-1)
        return tree;
    }
    return callDFS(0, postorder.length-1);
};
