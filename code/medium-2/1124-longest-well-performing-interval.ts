function longestWPI(hours: number[]): number {
    let res = 0;
    let count = 0;
    let arr = [];
    // prefix sum
    for(let i=0; i<hours.length; i++){
        let h = hours[i];
        if(h > 8){
            count ++;
        }else{
            count --;
        }
        arr.push(count);
        // consider start from 0
        if(count > 0){
            res = i+1;
        }
    }
    // consider start from 1
    for(let i=0; i<arr.length-1; i++){
        for(let j=arr.length-1; j>=i+1; j--){
		    // look for the longest, if found then break
            if(arr[j] - arr[i] > 0){
                let len = j-i;
                if(len > res){
                    res = len;
                }
                break;
            }
        }
    }

    return res; 
};
// Time complexity: O(n^2)
// Space complexity: O(n)
