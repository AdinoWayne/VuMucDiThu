function minSwaps(s: string): number {
    let stk = []
    for(let c of s){
        if(stk && c == ']')    stk.pop()
        else if(c == '[')   stk.push(c)
    }
    return (stk.length) / 2
};
