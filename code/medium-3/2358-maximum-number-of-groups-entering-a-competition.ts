function maximumGroups(grades: number[]): number {
    const n = grades.length;
    let i = 1;
    while((i + 1) * i/2 < n){
        i ++;
    }
    return (i + 1) * i/2 == n? i : i -1;
};
// Time complexity: O(log n) on average and worst case, O(1) in the best case
// Space complexity: O(1)
