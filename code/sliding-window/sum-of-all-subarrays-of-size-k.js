// Given an array arr[] and an integer K, the task is to calculate the sum of all subarrays of size K.
// Input: arr[] = {1, 2, 3, 4, 5, 6}, K = 3 
// Output: 6 9 12 15 
// Explanation: 
// All subarrays of size k and their sum: 
// Subarray 1: {1, 2, 3} = 1 + 2 + 3 = 6 
// Subarray 2: {2, 3, 4} = 2 + 3 + 4 = 9 
// Subarray 3: {3, 4, 5} = 3 + 4 + 5 = 12 
// Subarray 4: {4, 5, 6} = 4 + 5 + 6 = 15

// Input: arr[] = {1, -2, 3, -4, 5, 6}, K = 2 
// Output: -1, 1, -1, 1, 11 
// Explanation: 
// All subarrays of size K and their sum: 
// Subarray 1: {1, -2} = 1 – 2 = -1 
// Subarray 2: {-2, 3} = -2 + 3 = -1 
// Subarray 3: {3, 4} = 3 – 4 = -1 
// Subarray 4: {-4, 5} = -4 + 5 = 1 
// Subarray 5: {5, 6} = 5 + 6 = 11 

// Javascript implementation to find the sum 
// of all subarrays of size K 
  
// Function to find the sum of 
// all subarrays of size K 
function calcSum(arr, n, k) 
{ 
  
    // Initialize sum = 0 
    var sum = 0; 
  
    // Consider first subarray of size k 
    // Store the sum of elements 
    for (var i = 0; i < k; i++) 
        sum += arr[i]; 
  
    // Print the current sum 
    document.write( sum + " "); 
  
    // Consider every subarray of size k 
    // Remove first element and add current 
    // element to the window 
    for (var i = k; i < n; i++) { 
          
        // Add the element which enters 
        // into the window and subtract 
        // the element which pops out from 
        // the window of the size K 
        sum = (sum - arr[i - k]) + arr[i]; 
          
        // Print the sum of subarray 
        document.write( sum + " "); 
    } 
} 
  
// Drivers Code 
var arr = [ 1, 2, 3, 4, 5, 6 ]; 
var n = arr.length; 
var k = 3; 
  
// Function Call 
calcSum(arr, n, k); 
  
