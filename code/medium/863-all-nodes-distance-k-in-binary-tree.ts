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

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  if(!root) return []
  const node = findTarget(root, null, target)  
  const res = []
  findAllKApart(node, k, res)
  return res
};

function findTarget(root, parent, target){
  if(!root) return null
  root.parent = parent
  if(root === target){    
   return root 
  }    
  return findTarget(root.left, root, target) || findTarget(root.right, root, target)    
}

function findAllKApart(root, k, res){
  if(!root || root.visited) return res
  if(k == 0){
    res.push(root.val)
    return res
  }   
  root.visited = true
  findAllKApart(root.left, k-1, res)
  findAllKApart(root.right, k-1, res)
  findAllKApart(root.parent, k-1, res)
  return res
}
// note: set parent when find target node.
// Time complexity: O(n)
// Space complexity: O(1)
