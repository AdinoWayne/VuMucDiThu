function minimumCardPickup(cards: number[]): number {
    let ans=Infinity;
    let obj={};
    for(let i=0; i<cards.length; i++){
      if(obj[cards[i]]===undefined){ 
        obj[cards[i]]=i;
      }
      else{ ans=Math.min(ans,i-obj[cards[i]]); obj[cards[i]]=i; }
    }
    return ans===Infinity ?-1 :ans+1;  
};
// TC O(n)
// SC O(n)
