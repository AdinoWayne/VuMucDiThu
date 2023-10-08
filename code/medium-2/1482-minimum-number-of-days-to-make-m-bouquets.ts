function minDays(bloomDay: number[], m: number, k: number): number {
    // Must have bloomDay.length >= (m * k) in order for bouquets to be at all possible
    if (bloomDay.length < m * k) return - 1;
    
    // Helper function returns boolean indicating whether m bouquets can be made after "days" days.
    const canMake = days => {  // Helper: T: O(N) (length of bloomDay)
        let numBouquets = 0; // tracks bouquets made
        let prevFlower = 0; // tracks start of current bouquet
        
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] > days) { // can't use current flower
                prevFlower = i + 1; // reset start of current bouquet
            } else { // flower is in bloom and is usable
                if (i - prevFlower + 1 == k) { 
                    numBouquets++;
                    prevFlower = i + 1;
                }
            }
        }
        return numBouquets >= m;
    }
    
    // Find min acceptable days to wait. // T: O(logM) (M is greatest val in bloomDay)
    let l = 0;
    let r = Math.max(...bloomDay);
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (canMake (mid)) r = mid;
        else l = mid + 1;
    }
    return l;
};
// TC O(nlogn)
// SC O(1)
