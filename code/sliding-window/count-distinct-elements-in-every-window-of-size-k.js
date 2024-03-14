// Input: arr[] = {1, 2, 1, 3, 4, 2, 3}, K = 4
// Output: 3 4 4 3
// Explanation: First window is {1, 2, 1, 3}, count of distinct numbers is 3
//                       Second window is {2, 1, 3, 4} count of distinct numbers is 4
//                       Third window is {1, 3, 4, 2} count of distinct numbers is 4
//                       Fourth window is {3, 4, 2, 3} count of distinct numbers is 3

// Input: arr[] = {1, 2, 4, 4}, K = 2
// Output: 2 2 1
// Explanation: First window is {1, 2}, count of distinct numbers is 2
//                       First window is {2, 4}, count of distinct numbers is 2
//                       First window is {4, 4}, count of distinct numbers is 1


function countDistinct(arr, k)
{
    // Creates an empty hashMap hM
    let hM = new Map();

    // Traverse the first window and store count
    // of every element in hash map
    for (let i = 0; i < k; i++)
    {
        if(hM.has(arr[i]))
        hM.set(arr[i], hM.get(arr[i])+1)
        else
        hM.set(arr[i], 1);
    }

    // Print count of first window
    document.write(hM.size + "<br/>");

    // Traverse through the remaining array
    for (let i = k; i < arr.length; i++) {

        // Remove first element of previous window
        // If there was only one occurrence
        if (hM.get(arr[i - k]) == 1) {
            hM.delete(arr[i - k]);
        }

        else // reduce count of the removed element
            hM.set(arr[i - k],  hM.get(arr[i - k]) - 1);            

        // Add new element of current window
        // If this element appears first time,
        // set its count as 1,
        if(hM.has(arr[i]))
        hM.set(arr[i], hM.get(arr[i])+1)
        else
        hM.set(arr[i], 1);

        // Print count of current window
        document.write(hM.size + "<br/>");
    }
}

 
// Driver code
let arr = [1, 2, 1, 3, 4, 2, 3];
let size = arr.length;
let k = 4;
countDistinct(arr, k, size);
     
    // This code is contributed by splevel62.
