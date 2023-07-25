function prevPermOpt1(arr: number[]): number[] {
    for (let index = arr.length - 1; index > 0; index--) {
        const value = arr[index];
        const target = arr[index - 1];
        if (value >= target) continue;
        let swapPosition = -1;
        let max = 0;

        for (let position = index; position < arr.length; position++) {
            const swapValue = arr[position];
            if (swapValue <= max || swapValue >= target) continue;
            swapPosition = position;
            max = swapValue;
        }
        [arr[index - 1], arr[swapPosition]] = [arr[swapPosition], arr[index - 1]];
        break;
    }
    return arr;
};
// TC O(n2)
// SC O(1)
