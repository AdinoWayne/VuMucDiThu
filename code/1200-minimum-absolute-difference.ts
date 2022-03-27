function minimumAbsDifference(arr: number[]): number[][] {
    const ans = [];
    arr.sort((a, b) => a - b);
    let minDiff = undefined;
    for (let i = 1; i < arr.length; i++) {
        if (minDiff != undefined) {
            minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
        } else {
            minDiff = arr[i] - arr[i - 1];
        }
        
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);
    }
    return ans;
};
