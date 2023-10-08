function findLengthOfShortestSubarray(arr: number[]): number {
    let left = 0, pos = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            if (pos.length == 2) {
                pos.pop();
            }
            pos.push([left, i-1]);
            left = i;
        }
    }
    if (pos.length == 2)
        pos.pop();
    pos.push([left, arr.length-1]);
    
    if (pos.length < 2)
        return 0;
    
    let res = arr.length;
    let i = 0, j = pos[1][0];
    
    while (i <= pos[0][1] && j <= pos[1][1]) {
        console.log(arr[i], arr[j], res)
        if (arr[i] > arr[j]) {
            res = Math.min(res, j - pos[1][0] + pos[0][1] - i + 1);
            j++;
        } else {
            i++;
        }
    }
    
    res = Math.min(res, j - pos[1][0]);
    
    return res + (pos[1][0]-1) - (pos[0][1]+1) + 1;
};
