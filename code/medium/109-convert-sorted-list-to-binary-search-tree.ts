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

function sortedListToBST(head: ListNode | null): TreeNode | null {
    const numOfNodes = countNodes(head)
    return traverse(numOfNodes)
    
    function traverse(n) {
        if (n <= 0) return null
        
        const left = traverse(Math.floor(n / 2))
        const root = new TreeNode(head.val)       
        root.left = left
        head = head.next
        root.right = traverse(n - Math.floor(n / 2) - 1)
        
        return root
    }
    
    function countNodes(node) {
        if (!node) return 0
        return 1 + countNodes(node.next)
    }
};
