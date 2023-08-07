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

function btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {
    let queue = [root], parents = [];
    let temp = root;
	
	// find the node that has be chosen using dfs
    while(temp.val !== x) {
        temp = queue.shift();
        temp.left ? queue.push(temp.left) : null;
        temp.right? queue.push(temp.right): null;
    }
    
    // get the sum of all the nodes in the sub tree using dfs
    let getSubtreeSum = (node) => {
        if(!node) {
            return 0;
        }
        let q = [node];
        let sub, count = 0;
        while(q.length) {
            count++;
            sub = q.shift();
            sub.left ? q.push(sub.left) : null;
            sub.right? q.push(sub.right): null;
        }
        return count;
    }
    
	// get the sums of both child trees
    let leftSum = getSubtreeSum(temp.left), rightSum = getSubtreeSum(temp.right);
    
	// if the sum of all the nodes in the tree that the other player picked can be cut off, and is less than
	// the remainder return true
    if( n - (leftSum + rightSum + 1 ) > leftSum + rightSum + 1){
        return true;
    }
    
	// If one of the child nodes presents itself as a larger tree than the remainder count of nodes return true
    if(leftSum > n - leftSum || rightSum > n-rightSum) {
        return true;
    }
    
	// return false if none of these conditions can be met
    return false;
};
// The time complexity of the algorithm is O(n) where n is the number of nodes in the tree.
// The space complexity is O(n) because we are using a queue to store the nodes in the tree.
