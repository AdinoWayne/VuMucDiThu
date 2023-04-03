function maximumSwap(num: number): number {
    const numArr = [...num.toString()].map(Number);
    const maxIdx = [];
    const len = numArr.length;
    let maxSofar = len-1;
    
    for(let i = len-1; i >= 0; i--) {
        if(numArr[i] > numArr[maxSofar]) maxSofar = i;
        maxIdx[i] = maxSofar;
    }
    
    for(let i = 0; i < len; i++) {
        const swapIdx = maxIdx[i];
        if(i != swapIdx && numArr[i] != numArr[swapIdx]) {
            [numArr[i], numArr[swapIdx]] = [numArr[swapIdx], numArr[i]]; // swap 
            break;
        }
    }
    return +numArr.join('');
};

// The idea is straightforward, as we can simply scan the digits backward and record the position of the largest digit when it first appears.
// Next time we scan the digits from left to right and find the first digit that is less than max to do the swap.
