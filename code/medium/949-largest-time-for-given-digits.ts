function largestTimeFromDigits(A: number[]): string {
    let res = '';
    
    function permute(arr, str) {
        if(str.length === 4) {
            if(+str >= +res) res = str;
            return;
        }
        
        for(let i = 0; i < arr.length; i++) {
            if(!str.length && arr[i] > 2) continue;
            if(str.length == 1 && str[0] == '2' && arr[i] > 3) continue;
            if(str.length == 2 && arr[i] > 5) continue;
            permute([...arr.slice(0, i), ...arr.slice(i+1)], str+arr[i]);
        }
    }
    permute(A, '');
    return res.slice(0, 2) + (res.length ? ':' : '') + res.slice(2);
};
// TC O(n!)
// SC O(n)
