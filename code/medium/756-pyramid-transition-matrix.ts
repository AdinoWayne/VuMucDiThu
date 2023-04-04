function pyramidTransition(bottom: string, allowed: string[]): boolean {
    /*Initialise map of 'children':[parent1,parent2,...]*/
    let map=new Map();
    allowed.map((item)=>{
       let t=map.get(item[0]+item[1])||new Array();
        t.push(item[2]);
        map.set(item[0]+item[1],t);
    });    
    
    /*For Caching*/
    let memo=new Map();
    
    let solve = function(cur,ind,next){
        /* if this level is already examined*/
        if(memo.has(cur))
            return memo.get(cur);
        
        /* if this level is top*/
        if(cur.length==1)
            return true;
        
        /* if we are at last character of this level*/
        if(ind>=cur.length-1){
            let res=solve(next,0,''); //Solve the upper level
            memo.set(next,res);      //Cache the result
            return res;             //return
        }
        
        /* if the current 2 characters do not have a parent */
        if(!map.has(cur.substring(ind,ind+2))){
            memo.set(cur,false);
            return false;
        }
        
        /*Loop over all parents of current 2 characters*/
        for(let char of map.get(cur.substring(ind,ind+2))){
            if(solve(cur,ind+1,next+char))
                return true;
        }
        return false;
    }
    return solve(bottom,0,'');
};
