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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    return helper(root, targetSum, [], []);
};

/**
 * A helper function that does the search
 * @param {TreeNode} root
 * @param {number} sum
 * @param {number[]} solution - one path from root to a leaf
 * @param {number[]} result - the final result
 * @return {number[]} result
 */
function helper(root, sum, solution, result) {
    if (!root) { // sanity check
        return result;
    }

    solution.push(root.val); // add current node's value to the solution

    if (!root.left && !root.right && root.val === sum) {
        result.push(solution.slice()); // found a solution
    }

    helper(root.left, sum - root.val, solution, result); // try left subtree
    helper(root.right, sum - root.val, solution, result); // try right subtree

    solution.pop(); // backtracking

    return result;
}
