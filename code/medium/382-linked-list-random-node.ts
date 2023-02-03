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

class Solution {
    head: ListNode
    constructor(head: ListNode | null) {
        this.head = head;
    }

    getRandom(): number {
       let i = 2;
       let cur = this.head.next;
       let val = this.head.val;
       while(cur) {
              const ratio = 1/i // cheat code
              if(Math.random() <= ratio ) val = cur.val;
              i++;
              cur = cur.next;
       }
       return val;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

//  correct way

class Solution {
    head: ListNode
    len: number
    constructor(head: ListNode | null) {
        this.head = head;
        let temp = head;
        this.len = 0;
        while (temp) {
            this.len++;
            temp = temp.next;
        }
    }

    getRandom(): number {
       let randIndex = Math.floor(Math.random() * this.len)
       let result = this.head;
       while(randIndex) {
            result = result.next;
            randIndex--;
       }
       return result.val;
    }
}
