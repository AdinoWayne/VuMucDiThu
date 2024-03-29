function numOfSubarrays(arr: number[]): number {
    let mod=1e9+7,sum=0,odds=0,evens=0
	//Notice that I do not need to keep track of the prefixSums, I just need the total count of odd and even PrefixSums
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        odds+=Number(sum%2==1)
        evens+=Number(sum%2==0)
    }
    return (odds*evens+odds)%mod
};
// TC O(n)
// SC O(1)
