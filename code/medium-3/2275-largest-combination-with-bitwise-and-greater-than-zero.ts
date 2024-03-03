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
