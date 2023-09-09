function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let count = 0, windowSize = 0, windowSum = 0;
    for(let i = 0; i < arr.length + 1; i++){
        if(windowSize === k){
            if(windowSum / k >= threshold) count++;
            windowSum -= arr[i - k];
            windowSize--;
        }
        windowSum += arr[i];
        windowSize++;
    }
    return count;
};
// TC O(n)
// SC O(1)
