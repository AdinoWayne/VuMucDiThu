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

function countPairs(root: TreeNode | null, distance: number): number {
    let result=0,dfs=(node)=>{
        if(!node||distance===1||(!node.left&&!node.right))return (!(distance>1&&node))?[]:[1]
        let l=dfs(node.left),r=dfs(node.right)
        if(!node.left||!node.right)return l.length?l.map(d=>d+1):r.map(d=>d+1)
        l.forEach(ld=>r.forEach(rd=>result+=Number(ld+rd<=distance)))
        return [...l,...r].map(d=>d+1)
    }
    return dfs(root).length?result:0
};
