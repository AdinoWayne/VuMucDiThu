function partitionLabels(s: string): number[] {
    let last=-1;
    const res=[];
    let left=0;
    for(let i=0;i<s.length;i++){
        last=Math.max(s.lastIndexOf(s[i]),last)
        if(i===last){
            res.push(i-left+1);
            left=i+1
        }
    }
    return res;
};

// Time complexity: O(n^2)
// Space comlexity: O(n)
