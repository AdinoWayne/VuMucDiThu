function maxChunksToSorted(arr: number[]): number {
    let lastInterval = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (i <= lastInterval) {
            lastInterval = Math.max(lastInterval, arr[i]);
        } else {
            lastInterval = arr[i];
            count += 1;
        }
        
    }
    
    return count + 1;
};
