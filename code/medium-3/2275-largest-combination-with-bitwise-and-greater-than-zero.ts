function largestCombination(candidates: number[]): number {
    const indexArr=Array(24).fill(0)
    for(let candidate of candidates){  
        let index =0 
        while(candidate>0){
            if((candidate&1)===1)indexArr[index]+=1
            candidate>>>=1
            index++
        }
    }
    return Math.max(...indexArr)
};
// Time Complexity: O(n)
// Space Complexity: O(1)
//hint:
// index--> 6 5 4 3 2 1 0
//     16 = 0 0 1 0 0 0 0
//     17 = 0 0 1 0 0 0 1
//     71 = 1 0 0 0 1 1 1
//     62 = 0 1 1 1 1 1 0
//     12 = 0 0 0 1 1 0 0
//     24 = 0 0 1 1 0 0 0
//     14 = 0 0 0 1 1 1 0 
// Approach: To maximize number of elements whose AND will result a number greater than zero find maximum number of ones that lie in a particular index.
