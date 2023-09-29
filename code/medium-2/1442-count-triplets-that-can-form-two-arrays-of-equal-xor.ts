function countTriplets(arr: number[]): number {
    let count = 0
    for(let i=0;i<arr.length;i++){
        let xor = arr[i]
        for(let j=i+1;j<arr.length;j++){
            xor ^= arr[j]
            if(xor == 0){
                count += (j-i)
            }
        }
    }
    return count
};
// explaination
// a==b
// xor b to the both side
// a^b=b^b
// a^b=0
// xor(a[i...k])=0
// the size of this subarray is j - i + 1
// think how many possible ways to cut it into two non-empty parts ---> it is j - i
// TC O(n2)
// SC O(1)
