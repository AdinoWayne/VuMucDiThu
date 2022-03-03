function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const fNLength = nums1.length;
    const nLength = nums2.length;
    let outPut = [];
    
    
    nums1.forEach(function(i,index){
        const numIndex = nums2.indexOf(i);
        let foundAGreater=false;
        for(var it=numIndex+1; it<=nLength; it++){
            if(i<nums2[it]){ outPut.push(nums2[it]); foundAGreater=true; break;}
        }
        if(!foundAGreater){outPut.push(-1)}
    });
    
    return outPut;
};
