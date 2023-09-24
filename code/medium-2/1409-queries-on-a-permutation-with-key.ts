function processQueries(queries: number[], m: number): number[] {
    let p = [],final=[]
    for(let i=1;i<=m;i++)p.push(i)
    for(let i=0;i<queries.length;i++){
        let index = p.indexOf(queries[i])
        p.unshift(p[index])
        p.splice(index+1,1)
        final.push(index)
    }
    return final
};
// TC O(n2)
// SC O(2n)
