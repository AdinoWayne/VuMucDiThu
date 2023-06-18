/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    queue: number[]

    _flat = (list: NestedInteger[]): NestedInteger[] =>
        list.map(item => item.isInteger() ? [item] : this._flat(item.getList()))
        .reduce((prev, next) => [...prev, ...next], [])

    constructor(nestedList: NestedInteger[]) {
        this.queue = this._flat(nestedList).map(item => item.getInteger());
    }

    hasNext = (): boolean => this.queue.length !== 0
    next = (): number => this.queue.shift();
}

// TC T(n) = 2 * T(n/2) + O(n) = O(nlogn)
// SC O(n)
// where 2 * T( n/2) comes from recursive calls to flatten the sub-trees


/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
