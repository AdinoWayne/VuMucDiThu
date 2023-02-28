function arrayNesting(nums: number[]): number {
    var len = nums.length,i,max = 0,count = 0;
    var set = new Set();
    for(i=0;i<len;i++){
        while(set.has(i) == false){
            set.add(i);
            i = nums[i];
            count++;
        }
        max = max > count ? max : count;
        count = 0;
    }
    return max;
};
