function singleNumber(nums: number[]): number[] {
    var result = [];
    if(nums.length==2){ return nums; } // A
    nums = nums.sort(function(val1, val2) {
        return val1>val2?1:val1<val2?-1:0;
    });
    for(var i=0;i<nums.length;++i){ // B
        if(nums[i]!=nums[i-1]&&nums[i]!=nums[i+1]){
            result.push(nums[i]);
            if(result.length==2){ return result; } // Find the two elements that appear only once. *result.length==2?return result:go on;* 
        }
    }
};
