function maxScore(nums1: number[], nums2: number[], k: number): number {
    const pairs: number[][] = nums1
        .map((n, i) => [n, nums2[i]])
        .sort((a, b) => b[1] - a[1]);
    const pq = new PriorityQueue({
        compare: (a: number, b: number) => a - b
    });
    let result = -Infinity;
    let sum = 0;
    for (let i = 0; i < pairs.length; i++) {
        sum += pairs[i][0];
        pq.enqueue(pairs[i][0]);
        if (pq.size() > k) sum -= pq.dequeue();
        if (pq.size() === k) result = Math.max(result, sum * pairs[i][1]);
    }
    return result;
};
// Time Complexity: O(n log n) (dominant term due to sorting)
// Space Complexity: O(n) (due to pairs and pq)
// class PriorityQueue {
//     constructor() {
//       this.items = [];
//     }
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     size () {
//         return this.items.length
//     }
//     enqueue(item, priority) {
//       const newItem = { item, priority };
//       this.items.push(newItem);
//       this.items.sort((a, b) => a.priority - b.priority);
//     }
//     dequeue() {
//       if (this.isEmpty()) {
//         throw new Error("PriorityQueue is empty");
//       }
//       return this.items.shift().item;
//     }
//     front() {
//       if (this.isEmpty()) {
//         throw new Error("PriorityQueue is empty");
//       }
//       return this.items[0].item;
//     }
//     printPQueue() {
//       console.log(this.items);
//     }
// }
