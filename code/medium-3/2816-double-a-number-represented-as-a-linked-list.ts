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

function doubleIt(head: ListNode | null): ListNode | null {
if (head === null) return head;

    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    let prev = null;
    let temp = head;

    while (temp !== null) {
        let nextTemp = temp.next;
        temp.next = prev;

        prev = temp;
        temp = nextTemp;
    }

    while (prev !== null) {
        let sum = carry;
        sum += (prev.val + prev.val);
        prev = prev.next;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    prev = null;
    temp = dummy.next;

    while (temp !== null) {
        let nextTemp = temp.next;
        temp.next = prev;

        prev = temp;
        temp = nextTemp;
    }

    return prev;
};
