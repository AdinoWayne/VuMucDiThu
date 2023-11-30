function numberOfWeeks(milestones: number[]): number {
    if(milestones.length===1){
        return 1;
    }
    let maxElement = -1, arrSum=0,rest, difference;
    for(let i=0;i<milestones.length;i++){
        arrSum+=milestones[i];
        maxElement = Math.max(maxElement,milestones[i]);
    }
    rest = arrSum-maxElement;
    difference = maxElement - rest;
    if(difference<=1){
        return arrSum;
    }
    return (arrSum - difference)+1;
};
