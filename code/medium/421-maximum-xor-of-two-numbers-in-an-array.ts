function findMaximumXOR(nums: number[]): number {
    let max = 0;
    for (let i = 31; i >= 0; --i) {   // we start from 31 as we have 32 bit integers
        const mask = (~0 >>> i) << i; // this is just i 1s followed by zeros: 1100..00 for i = 2
        const set:any = new Set();  // using set for constant access time, as o/w need to loop through the array and would have had O(Nˆ2) time
        for (let num of nums) {
            set.add(num & mask); // adding the prefixes of all nums to the lookup set to check if we have a candidate
        }
        const maxCandidate = max | 1 << i; // we wand to check if in our set there are two numbers that xored will give us the best possible previous result with a 1 at the end. If yes, we will update the best possible result with 1, if not with 0.
        for (let num of set) {
            const another = maxCandidate ^ num; // this is the number we need to have num ^another === maxCandidate
            if (set.has(another)) { // if we have such, update maxCandidate => add 1 at the end. If not - in the next iteration i will increment, and as we did not add the 1, we will have 0 at this position.
                max = maxCandidate;
                break;
            }
        }
    }
    return max; // as we went from left to right all bits, the maxCandidate is as well the maximum.
};
