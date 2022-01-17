#1. Given two sorted arrays A and B, generate all possible arrays such that first element is taken from A then from B then from A and so on in increasing order till the arrays exhausted. The generated arrays should end with an element from B

```
A = {10, 15, 25}
B = {1, 5, 20, 30}

The resulting arrays are:
  10 20
  10 20 25 30
  10 30
  15 20
  15 20 25 30
  15 30
  25 30
  ```
  
  ```
  function generateUtil(A , B , C , i , j , m , n , len,  flag) {
  if (flag) {
    if (len != 0)
      console.log("result:", C.filter(el => el > 0));
    for (var k = i; k < m; k++) {
      if (len == 0) {
        C[len] = A[k];
        generateUtil(A, B, C, k + 1, j, m, n, len, !flag);
      }
      else if (A[k] > C[len]) {
        C[len + 1] = A[k];
        generateUtil(A, B, C, k + 1, j, m, n, len + 1, !flag);
      }
    }
  } else {
    for (var l = j; l < n; l++) {
      if (B[l] > C[len]) {
        C[len + 1] = B[l];
        generateUtil(A, B, C, i, l + 1, m, n, len + 1, !flag);
      }
    }
  }
}
function generate(A , B , m , n) {
  var C = Array(m + n).fill(0);
  generateUtil(A, B, C, 0, 0, m, n, 0, true);
}

var A = [ 10, 15, 25 ];
var B = [ 5, 20, 30 ];
var n = A.length;
var m = B.length;
generate(A, B, n, m);
```

#2. Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2

```
const checkPytago = (arr, a, b, c, isFirst) => {
  if (arr.length < 3) {
  	return;
  }
	if (isFirst) {
  	arr.sort((a, b) => a - b);
  }
  const [x, y, z] = [arr[a], arr[b], arr[c]].map(el => Math.pow(el, 2));
  if (x == y + z || y == x + z || z == x + y) {
  	return true;
  }
  if (a == arr.length - 3 && b == arr.length - 2 && c == arr.length - 1) { 
  	return false;
  } else if (c < arr.length - 1) {
  	c++;
  } else if (b < arr.length - 2) {
    b++;
    c = b + 1;
  } else if (a < arr.length - 3) {
    a++;
    b = a + 1;
    c = a + 2;
  }
	return checkPytago(arr, a, b, c, false);
}

console.log(checkPytago([3, 1, 4, 6, 5], 0 , 1, 2, true));
```
best way
```

function checkTriplet(arr , n) {
  var maximum = 0;
  for (i = 0; i < n; i++) {
    maximum = Math.max(maximum, arr[i]);
  }
  var hash = Array(maximum + 1).fill(0);
  for (i = 0; i < n; i++)
    hash[arr[i]]++;
  for (i = 1; i < maximum + 1; i++) {
    if (hash[i] == 0)
      continue;
    for (j = 1; j < maximum + 1; j++) {
      if ((i == j && hash[i] == 1) || hash[j] == 0)
        continue;
      var val = parseInt( Math.sqrt(i * i + j * j));
      if ((val * val) != (i * i + j * j))
        continue;
      if (val > maximum)
        continue;
      if (hash[val] >= 1) {
        return true;
      }
    }
  }
  return false;
}
var arr = [ 3, 2, 4, 6, 9, 8];
var n = arr.length;
console.log(checkTriplet(arr, n));
```
#3. Given a sorted array (sorted in non-decreasing order) of positive numbers, find the smallest positive integer value that cannot be represented as the sum of elements of any subset of a given set. 
The expected time complexity is O(nlogn).

```
function findSmallest(arr , n)
{
  var res = 1;
  for (i = 0; i < n && arr[i] <= res; i++)
    res = res + arr[i];
  return res;
}
var arr = [ 1, 1, 3, 7];
var n = arr4.length;
document.write(findSmallest(arr4, n)+"<br/>");
```

#4. Given an array of integers and a number x, find the smallest subarray with sum greater than the given value. 
```
function smallestSubWithSum(arr, n, x)
{
    // Initialize current sum and minimum length
    let curr_sum = 0, min_len = n + 1;

    // Initialize starting and ending indexes
    let start = 0, end = 0;
    while (end < n) {
        // Keep adding array elements while current sum
        // is smaller than or equal to x
        while (curr_sum <= x && end < n)
            curr_sum += arr[end++];
        // If current sum becomes greater than x.
        while (curr_sum > x && start < n) {
            // Update minimum length if needed
            if (end - start < min_len)
                min_len = end - start;

            // remove starting elements
            curr_sum -= arr[start++];
        }
    }
    return min_len;
}

/* Driver program to test above function */
let arr1 = [ 1, 4, 45, 6, 10, 19 ];
let x = 51;
let n1 = arr1.length;
let res1 = smallestSubWithSum(arr1, n1, x);
console.log(res1);
```
#5. The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling in those days. For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0, selling on day 3. Again buy on day 4 and sell on day 6. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all

Valley Peak Approach
```
function maxProfit(prices , size) {
	// maxProfit adds up the difference between
	// adjacent elements if they are in increasing order
	var maxProfit = 0;
	// The loop starts from 1
	// as its comparing with the previous
	for (i = 1; i < size; i++)
	    if (prices[i] > prices[i - 1])
		maxProfit += prices[i] - prices[i - 1];
	return maxProfit;
}

// Driver code

// stock prices on consecutive days
var price = [ 100, 180, 260, 310, 40, 535, 695 ];
var n = price.length;

// function call
document.write(maxProfit(price, n));
```
