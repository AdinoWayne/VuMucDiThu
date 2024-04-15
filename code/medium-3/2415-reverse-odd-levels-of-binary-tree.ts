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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        const next = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        }
        
        if (level % 2) {
            for (let i = 0, j = queue.length - 1; i < j; i++, j--) {
                const temp = queue[i].val;
                queue[i].val = queue[j].val;
                queue[j].val = temp;
            }
        }
        
        queue = next;
        level++;
    }
    
    return root;
};
// The time complexity is dominated by the nested loops and ranges from O(n * log n) to O(n * 2^n) depending on the tree's balance.
// The space complexity is also influenced by the tree's balance, ranging from O(log n) to O(n).

// queue: This is a JavaScript array that will be used to perform a Breadth-First Search (BFS) traversal of the tree. It's initialized with the root node ([root]).
// level: This variable keeps track of the current level (depth) being processed in the BFS traversal. It's initialized to 0 (root level).
