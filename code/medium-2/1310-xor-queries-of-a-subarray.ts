function xorQueries(arr: number[], queries: number[][]): number[] {
    const xor_arr = [], res_arr = [];
    xor_arr[0] = arr[0];
    //create the prefix xor of arr
    // if arr= [1,3,4,8] 
    // so xor_arr = [1, 1^3, 1^3^4, 1^3^4^8]
    for ( var i=1 ; i<arr.length; i++ ) {
         xor_arr[i] = xor_arr[i-1]^arr[i]
    }
    for (const [start, end] of queries) {
        res_arr.push(xor_arr[start]^xor_arr[end]^arr[start])
    	                           
    }
    return res_arr;
};
// TC O(n)
// SC O(n)
