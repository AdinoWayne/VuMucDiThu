function digitCount(num: string): boolean {
    const numLength = num.length;
    const numArray = num.split('').map(Number);
    let result = "";
    
    const numFreq = numArray.reduce((acc,item)=>acc.set(item,acc.get(item) + 1 || 1),new Map())
    
    for(let i=0;i<numLength;i++){
        result+=numFreq.get(i) || "0";        
    }
    
    return result === num
};
