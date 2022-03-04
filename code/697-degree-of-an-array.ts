function findShortestSubArray(nums: number[]): number {
   let range = new Map(), maxDegree = 0, minLength = Infinity;
   for(let i = 0; i < nums.length; i++){ if(range.has(nums[i])) {
      let start = range.get(nums[i])[0];
      let degree = range.get(nums[i])[2]; degree++;
      range.set(nums[i], [start, i, degree]);
      if(degree > maxDegree)
         maxDegree = degree;
      }
      else {
         let degree = 1;
         range.set(nums[i],[i, i, degree]); if(degree > maxDegree)
         maxDegree = degree;
      }
   }
   for (let key of range.keys()){
      let val = range.get(key)
      if(val[2] === maxDegree){
         let diff = (val[1] - val[0]) + 1;
         if(diff < minLength) minLength = diff;
      }
   }
   return minLength;
};
