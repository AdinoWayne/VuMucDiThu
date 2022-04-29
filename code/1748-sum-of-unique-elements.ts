function sumOfUnique(nums: number[]): number {
    let map = new Map(), sum = 0;
    nums.forEach(item => {
        let count = map.get(item) || 0;
        map.set(item, ++count)
    });

    for(let [key, value] of map) {
        if(value === 1) {
            sum += key;
        }
    }
    return sum;
};
