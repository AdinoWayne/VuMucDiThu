/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    if (!root) return []

    let stack = [root]
    let result = []

    while (stack.length) {
        let current = stack.pop();
        result.push(current.val)
        if (current.children) stack.push(...current.children.reverse())
    }

    return result
};
