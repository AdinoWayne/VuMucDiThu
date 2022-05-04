function subsetXORSum(nums: number[]): number {
        let result = 0;
    	let x = Math.pow(2, nums.length) - 1;
        for(let i=1;i<=x;i++) {
        	let p = i;
        	let r = 0;
        	for(let j=0;j<nums.length;j++) {
        		let t = p & 1;
        		p >>= 1;
 
        		if (t == 1) {
    				r ^= nums[j];
        		}
        	}
 
        	result += r;
        }
 
        return result;
};
