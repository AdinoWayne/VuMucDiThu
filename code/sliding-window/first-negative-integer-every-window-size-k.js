// Given an array and a positive integer k, find the first negative integer for each window(contiguous subarray) of size k.
// If a window does not contain a negative integer, then print 0 for that window.

// Input : arr[] = {-8, 2, 3, -6, 10}, k = 2
// Output : -8 0 -6 -6
// First negative integer for each window of size k
// {-8, 2} = -8
// {2, 3} = 0 (does not contain a negative integer)
// {3, -6} = -6
// {-6, 10} = -6
// Input : arr[] = {12, -1, -7, 8, -15, 30, 16, 28} , k = 3
// Output : -1 -1 -7 -15 -15 0

   
// JavaScript code to implement the above approach
 
function printFirstNegative(arr, n, k) {
     
    // Create an empty deque to store the indices of 
    // negative integers
    const negIndices = [];
 
    // Traverse through the array
    for (let i = 0; i < n; i++) {
         
        // If the deque is not empty and the leftmost 
        // element is out of the current window,
        // then remove it from the deque
        if (negIndices.length && negIndices[0] === i - k) {
            negIndices.shift();
        }
 
        // If the current element is negative, add its index 
        // to the deque
        if (arr[i] < 0) {
            negIndices.push(i);
        }
 
        // If the current window is of size k, print the 
        // first negative integer (if present)
        if (i >= k - 1) {
             
            // If the deque is not empty, the leftmost 
            // element is the first negative integer
            if (negIndices.length) {
                process.stdout.write(arr[negIndices[0]] + ' ');
            } 
            else {
                process.stdout.write('0 ');
            }
        }
    }
}
 
// Driver code
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const n = arr.length;
const k = 3;
 
printFirstNegative(arr, n, k); // Output: -1 -1 -7 -15 -15 0
