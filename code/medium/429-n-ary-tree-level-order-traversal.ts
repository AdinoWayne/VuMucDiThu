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

function levelOrder(root: Node | null): number[][] {
    const res = [];
    BFS(root, 0);
    return res;
    
    function BFS(node, depth) {
        if (!node) return;
        if (depth === res.length) {
            res.push([]);
        }
        res[depth].push(node.val);
        for (let child of node.children) {
            BFS(child, depth + 1);
        }
    }
};
