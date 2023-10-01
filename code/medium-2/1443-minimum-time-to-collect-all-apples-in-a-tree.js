function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    const adjlist = Array.from(Array(n), () => new Array());
    for(const edge of edges){
        adjlist[edge[0]].push(edge[1]);
        adjlist[edge[1]].push(edge[0]);
    }
    const dfs = (i, p)=>{
        let pathlen = 0;
        for(const j of adjlist[i]){
            if(j == p) continue;
            pathlen += dfs(j, i);
        }
        if(i == 0) return pathlen;
        return pathlen > 0 || hasApple[i]? pathlen+2 : 0;
    }
    return dfs(0,-1);
};
// TC O(n)
// SC O(n)
