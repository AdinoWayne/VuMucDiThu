function findRelativeRanks(score: number[]): string[] {
    let sorted = score.slice(),
        map = {};
    
    sorted.sort(function(a,b){return b-a});
    
    sorted.forEach(function(v,i){
        map[v] = i + 1 + '';
    })
    
    return score.map(function(v,i){
        switch(v){
            case sorted[0]:
                return "Gold Medal";
            case sorted[1]:
                return "Silver Medal";
            case sorted[2]:
                return "Bronze Medal";
            default:
                return map[v]
        }
    })
};
