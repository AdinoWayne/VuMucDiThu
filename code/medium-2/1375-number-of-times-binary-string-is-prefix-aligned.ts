function numTimesAllBlue(flips: number[]): number {
    let total = 0;
    let target = 0;
    let moments = 0;
    
    for(let i = 0; i < flips.length; i++){
        total += flips[i];      // add up all the bulbs number
        target += i + 1;        // add up the index of each array plus 1
        
        if(total === target) moments++;
    }    
    
    return moments;
};
