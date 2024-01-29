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

function amountOfTime(root: TreeNode | null, start: number): number {
    function dfs(node){
        if (node == null){
            return [-1, -Number.MAX_VALUE]
        }

        let [left,left_dist] = dfs(node.left)
        let [right,right_dist] = dfs(node.right)
        
        let infect_time = Math.max(
                left,
                right,
                left + right_dist + 2,
                right + left_dist + 2,
                )
        

        if (left_dist < 0 && right_dist < 0){
            infect_time = Math.max(left,right)+1
        }
        
        let distance = Math.max(left_dist,right_dist)+1
        if (node.val == start){
            distance = 0
        }
        
        return [infect_time, distance]
    }

    let [answer,_] = dfs(root)
    return answer
};
