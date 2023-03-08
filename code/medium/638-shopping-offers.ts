function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
    let solve = (left)=>{
        let mn = left.reduce((acc,cur,ind)=>acc+(price[ind]*cur),0);/*direct purchase*/
        let ar = new Array();/*new needs */
        for(let offer of special){/*loop over all offers*/
            for(let [ind,unit] of offer.entries()){/*loop over an offer */
                if(ind>=left.length)
                    break;
                if(unit>left[ind]){/*offer is invalid*/
                    ar = [];/*empty new - needs*/
                    break;/*continue over to next offer*/
                }
                    
                ar.push(left[ind]-unit);/*push new need item*/
            }
            if(ar.length>0)/*if this offer was valid*/
                mn=Math.min(mn,offer[offer.length-1]+solve(ar));/*update min from Recursion on left over needs*/
            ar=[];/*empty new needs for next offer*/
        }
        return mn;/*return result*/
    };
    return solve(needs);
};
