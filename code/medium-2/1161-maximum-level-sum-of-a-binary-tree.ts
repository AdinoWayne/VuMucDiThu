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

function maxLevelSum(root: TreeNode | null): number {
    if (!root)
        return 1;
    
    const queue = [root];
    const levels = [];
    
    while (queue.length) {
        const level = [];
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        
        levels.push(level.reduce((acc, curr) => acc + curr));
    }
    
    return levels.indexOf(Math.max(...levels)) + 1;
};
// The time complexity of this function is O(n) where n is the number of nodes in the tree.
// The space complexity is O(w) where w is the maximum width of the tree
