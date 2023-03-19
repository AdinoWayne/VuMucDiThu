function findUnsortedSubarray(nums: number[]): number {
    let l = 0, r = nums.length-1, nd = -1, st = 0;
    let min  = Infinity, max = -Infinity;
    
    while(r>=0){
        nums[l] >= max ? max = nums[l] : nd = l;
        nums[r] <=min ? min = nums[r] : st = r;
        l++;
        r--;
    }
    
    return nd-st+1;
};

// nd = The most right element having greater elements on the left side.
// st = The most left element having smaller elements on the right side.

// Prove it is effective:
// According to the definition, we can know that all elements on the right side of nd do not have greater elements on the left side and all
// elements on the left side of the st do not have greater elements on the right side.
// Therefore, these two parts are good and we only need to sort the elements between st and st.
// Therefore we care about the max value counted from the left (and the min value counted from the right).

// TC O(n) 
// SC O(1)
