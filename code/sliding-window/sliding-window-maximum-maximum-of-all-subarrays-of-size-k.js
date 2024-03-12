// Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
// Output: 3 3 4 5 5 5 6
// Explanation: Maximum of 1, 2, 3 is 3
//                        Maximum of 2, 3, 1 is 3
//                        Maximum of 3, 1, 4 is 4
//                        Maximum of 1, 4, 5 is 5
//                        Maximum of 4, 5, 2 is 5 
//                        Maximum of 5, 2, 3 is 5
//                        Maximum of 2, 3, 6 is 6

// Input: arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}, K = 4 
// Output: 10 10 10 15 15 90 90          
// Explanation: Maximum of first 4 elements is 10, similarly for next 4 
//                        elements (i.e from index 1 to 4) is 10, So the sequence 
//                        generated is 10 10 10 15 15 90 90

// Maximum of all subarrays of size K using Max-Heap: 
// Initialize an empty priority queue heap to store elements in decreasing order of their values, along with their indices.
// Push the first k elements of the input array arr into the priority queue heap along with their respective indices.
// The maximum element in the first window is obtained by accessing the top element of the priority queue heap. Push this maximum element into the answer vector ans.
// Process the remaining elements of arr starting from index k:
// Add the current element along with its index to the priority queue heap.
// Remove elements from the priority queue heap that are outside the current window. This is done by comparing the index of the top element in the heap with the index i – k. If the index of the top element is less than or equal to i – k, it means the element is outside the current window and should be removed.
// The maximum element in the current window is obtained by accessing the top element of the priority queue heap. Push this maximum element into the answer vector ans.
// Finally, return the answer vector ans containing the maximum elements in each sliding window.
// Below is the implementation of the above approach:

class Pair {
    constructor(value, index) {
        this.value = value;
        this.index = index;
    }
}
 
function maxSlidingWindow(arr, k) {
    const ans = [];
    const heap = [];
 
    // Initialize the heap with the first k elements
    for (let i = 0; i < k; i++) {
        heap.push(new Pair(arr[i], i));
    }
    heap.sort((a, b) => b.value - a.value);
 
    // The maximum element in the first window
    ans.push(heap[0].value);
 
    // Process the remaining elements
    for (let i = k; i < arr.length; i++) {
        heap.push(new Pair(arr[i], i));
 
        // Remove elements that are outside the current window
        while (heap[0].index <= i - k) {
            heap.shift();
        }
        heap.sort((a, b) => b.value - a.value);
 
        // The maximum element in the current window
        ans.push(heap[0].value);
    }
 
    return ans;
}
 
const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
const k = 3;
 
// Find the maximum element in each sliding window of size k
const result = maxSlidingWindow(arr, k);
 
// Print the results
for (const num of result) {
    console.log(num + " ");
}
// Time Complexity: O(NlogN), Where N is the size of the array.
// Auxiliary Space: O(N), where N is the size of the array, this method requires O(N) space in the worst case when the input array is an increasing array
