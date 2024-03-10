// Find maximum (or minimum) sum of a subarray of size k

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
// Output : 39
// Explanation: We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

function maxSum(arr,n,k)
{
      if (n < k)
      {
          document.write("Invalid");
          return -1;
      }

      let res = 0;
      for (let i=0; i<k; i++)
          res += arr[i];

      let curr_sum = res;
      for (let i=k; i<n; i++)
      {
          curr_sum += arr[i] - arr[i-k];
          res = Math.max(res, curr_sum);
      }
      return res;
}
