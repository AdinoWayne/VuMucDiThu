function findDifference(nums1: number[], nums2: number[]): number[][] {
	const [count1, count2] = [getCount(nums1), getCount(nums2)];
    const a = [], b = [];
    
    for (let prop in count1) {
        if (!count2.hasOwnProperty(prop)) {
            a.push(prop);
        };
    }

    for (let prop in count2) {
        if (!count1.hasOwnProperty(prop)) {
            b.push(prop);
        };
    }
    
	return [a, b];
};

function getCount(nums) {
    let count = {}
    nums.forEach(e => {
        if(count[e] == undefined)
            count[e] = true
    })

    return count
}
