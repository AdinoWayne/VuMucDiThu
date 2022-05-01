function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let res = 0;
    for(let i of items){
      if(ruleKey=="color" && i[1]==ruleValue){
        res++
      }else if(ruleKey=="type" && i[0]==ruleValue){
        res++
      }else if(ruleKey=="name" && i[2]==ruleValue){
        res++
      }
    }
    return res;
};
