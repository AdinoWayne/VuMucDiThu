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

function minimumOperations(root: TreeNode | null): number {
    let queue = [root], ans = 0;
  while (queue.length)  {
    let next = [];
    ans += minSwaps(queue.map(node => node.val));
    while (queue.length) {
      let node = queue.shift();
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    queue = next;
  } 
  return ans;
};

function minSwaps(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let indexes = sorted.reduce((memo, num, idx) => {
    memo[num] = idx;
    return memo;
  }, {});

  let next = {};
  for (let num of nums) {
    next[num] = nums[indexes[num]];
  }

  let seen = new Set(), ans = 0;
  for (let num of nums) {
    let cycleSize = 0, node = num;
    while (!seen.has(node)) {
      seen.add(node);
      node = next[node];
      cycleSize++;
    }
    ans += Math.max(0, cycleSize - 1);
  }
  return ans;
}
