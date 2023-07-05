function equationsPossible(equations: string[]): boolean {
    let parent = new Map();
    const find = a => {
        parent.set(a, parent.get(a) || a);
        return parent.get(a) === a ? a : find(parent.get(a));
    }
    
    equations.forEach(([a,s,,b]) => {
        if(s === "="){
            find(a); // a -> a
            find(b); // b -> b
            parent.set(find(a), find(b));
        }
    })
    
    for(let [a,s,,b] of equations){
        if(s === "!"){
            if(find(a) === find(b)) return false; // if parent a = parent b is false
        }
    }
    
    return true;
};
// TC O(n)
// SC O(n)
