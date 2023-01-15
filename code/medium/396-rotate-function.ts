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
