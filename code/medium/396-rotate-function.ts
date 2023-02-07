function maxRotateFunction(A: number[]): number {
    if(A.length===0) return 0;

    var res = [],
       n = A.length,
       sum=0,
       f=0;
      
    for(var i=0;i<n;i++){
          sum += A[i];
          f += i*A[i];
    }
    
    res[0] = f;
    for (var j = 1; j < n; j++) {
        res[j] = res[j-1] + sum - n*A[n-j];
    }
    return Math.max(...res);
};
// F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
// F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
// F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
// F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

// The complexity of the maxRotateFunction function is O(n).
// The function loops through the array A twice, once to calculate the sum and the initial value of the variable f, and another time to calculate the values in the res array.
// The calculation of the values in the res array takes O(n) time, as it requires looping through the array A and performing a constant amount of arithmetic operations.
// The calculation of the sum and the initial value of the variable f takes O(n) time as well. Overall, the time complexity of the function is O(n).
