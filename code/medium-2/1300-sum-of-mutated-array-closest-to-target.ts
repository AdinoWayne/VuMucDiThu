function findBestValue(arr: number[], target: number): number {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const lengthOfNumsToRight = arr.length - i;
        const currentNum = arr[i];
        if (sum + (currentNum * lengthOfNumsToRight) > target) {
            return Math.ceil((target - sum) / lengthOfNumsToRight - 0.5);
        }
        sum += currentNum;
    }

    return arr[arr.length - 1];
};
// left part + right part = target
// left part + v*removed  = target
// v = (target - left part)/removed
// TC O(nLogn)
// SC O(1)
