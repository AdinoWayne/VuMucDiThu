function isOneBitCharacter(bits: number[]): boolean {
    const n = bits.length - 1;
    for(let i=0; i<n;){
        if(bits[i]===1 && i+1<n){
            i+=2;
            continue;
        }else if(bits[i]===0){
            i+=1;
            continue;
        } else{
            return false
        }
    }
    return true
};
