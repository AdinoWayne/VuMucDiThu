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

// Time Complexity: O(N)
// Space Complexity:
// O(log N) in average case.
// O(N) in worst case, that there is an unbalanced tree.

var levelOrder = function(root) {
    function DFS(node) {
        if (!node) return
        if (node.children.length) {
            level++
            if (!ret[level]) ret.push([])
            ret[level].push(...node.children.map(DFS))
            level--
        }
        return node.val
    }
    let level = 0, ret = root ? [[root.val]] : []
    DFS(root)
    return ret
};
