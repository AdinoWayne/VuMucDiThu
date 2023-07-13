function maxScoreSightseeingPair(values: number[]): number {
    let prevMax = values[0], max = 0;

    for(let i = 1; i < values.length; i++) {

        prevMax--; //values[i] + i - j
        max = Math.max(max, prevMax + values[i]); // values[j]
        prevMax = Math.max(prevMax, values[i]);
    }
    
    return max;
};
// TC O(n)
// SC O(1)
