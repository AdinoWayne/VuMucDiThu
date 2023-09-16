function peopleIndexes(favoriteCompanies: string[][]): number[] {
    let map = new Map(), res =[]
   
    let subSet = (currSet, otherSet)=> {
        for (let val of currSet){
            if (!otherSet.has(val)){
                return false
            }
        }
        return true
    }
    
    let isSubSet = (ind,set)=> {
        for (let[key,otherSet] of map.entries()){
            if (key===ind) continue
            if (set.size>otherSet.size) continue
            if (subSet(set,otherSet)) return true
        }
        return false
    }
    
    
    for (let i=0;i<favoriteCompanies.length;i++ ){
        map.set(i,new Set(favoriteCompanies[i]))
    }
    
    for (let [key,val] of map.entries()){
        if (!isSubSet(key,val)) res.push(key)
    }
    
    return res.sort((a,b)=>a-b)
};
