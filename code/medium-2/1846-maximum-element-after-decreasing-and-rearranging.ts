function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let max: any = 1;
    for (let i = 1; i < arr.length; i++) {
        max += arr[i] > max;
    }
    return max;
};
