/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    const queue = [root];
    
    while(queue.length > 0) {
        const curr = queue.pop();
        
        if(helper(curr, head)) return true;
        
        if(curr.left) queue.unshift(curr.left);
        if(curr.right) queue.unshift(curr.right);
    }
    
    return false;
    
};

const helper = (treeNode, listNode) => {
    if(!treeNode) return false;
    
    if(treeNode.val !== listNode.val) return false;
    
    if(!listNode.next) return true;
    
    listNode = listNode.next;
    
    const leftResult = helper(treeNode.left, listNode);
    const rightResult = helper(treeNode.right, listNode);
    
    return leftResult || rightResult;
};
