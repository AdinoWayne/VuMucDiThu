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

class CBTInserter {
    root: TreeNode;
    stack: any[];
    constructor(root: TreeNode | null) {
        const queue = [root];
        this.root = root;
        this.stack = [];

        while (queue.length) {
            const size = queue.length;
            for (let index = 0; index < size; index++) {
                const node = queue.shift();
                const { left, right } = node;

                if (!left || !right) {
                this.stack.push(node);
                continue;
                }
                queue.push(left, right);
            }
        }
    }

    insert(val: number): number {
        const node = this.stack[0];

        if (node.left) {
            node.right = new TreeNode(val);
            this.stack.shift();
            this.stack.push(node.left, node.right);
        } else {
            node.left = new TreeNode(val);
        }
        return node.val;
    }

    get_root(): TreeNode | null {
        return this.root;
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
