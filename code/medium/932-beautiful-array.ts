function beautifulArray(n: number): number[] {
    let arr=Array.from({length:n}, (x,i)=>i+1);
    return helper(arr);

    function helper(arr){
    	if(arr.length===1) return arr;
    	let o=[], e=[]; //odd index and even index
    	for(let i=0; i<arr.length; i++){
    		if(i%2===0) e.push(arr[i]);
    		else o.push(arr[i]);
    	}
    	return helper(e).concat(helper(o));
    }
};

// 1,3,5,7,9..... | 2,4,6,8,10..... -> 1,5,9,... | 3,7,11,... -> 1,9... | 5...
// there is no j in the second part for any i k in the first part
// there is no j for i in the first part and k in the second part

// TC O(NlogN)
// SC O(N)
