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

class FindElements {
    treeSet: any
    constructor(root: TreeNode | null) {
        this.treeSet = new Set();

        const dfsTree = (node = root, parent = 0, add = 0) => {
            if (!node) return;
            const { left, right } = node;
            const value = parent * 2 + add;

            this.treeSet.add(value);
            dfsTree(left, value, 1);
            dfsTree(right, value, 2);
        };

        dfsTree();
    }

    find(target: number): boolean {
        return this.treeSet.has(target);
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
