function minOperations(nums: number[]): number {
    let map = new Map();
    // count frequencies of each element
    for(let i of nums){
        if(!map.has(i)) {
            map.set(i, 1);
        } else {
            map.set(i, map.get(i) + 1);
        }
    }
    let res = Array.from(map.values());
    let operations = 0;
    for(const freq of res){
        // If any number obtain only once return -1
        if(freq === 1) return -1;

        // Calculate the number of operations of type 2
        operations += Math.floor(freq / 3);

        // If 1 or 2 elements are left, perform an operation of type 1
        if(freq % 3 > 0){
            operations++;
        }
    }
    return operations;
};
