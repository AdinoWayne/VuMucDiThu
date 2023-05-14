function numFriendRequests(ages: number[]): number {
    let count = 0;
    
    const ageCountMap = new Map(); // S: O(N)
    const ageCountArr = [0]; // S: O(120)
    
    // Count how many people have a certain age.
    for (let age of ages) { // T: O(N)
        let currCount = ageCountMap.get(age) || 0;
        ageCountMap.set(age, currCount + 1);
    }
    // Count how many people have up to (and including) a certain age
    for (let i = 1; i <= 120; i++) { // T: O(120)
        let ageCount = ageCountMap.get(i) || 0;
        ageCountArr.push(ageCount + ageCountArr[i - 1]);
    }
    
    for (let age of ages) { // T: O(N)
        let lowerBound = Math.floor((age * 0.5)) + 7 + 1; // Inclusive
        let upperBound = age; // Inclusive
		// Calculate requests by subtracting cumulative sum up to the lower bound from the cumulative sum up to the upper bound
		// Need "-1" to deduct a given person from the request, since we cant send requests to ourselves
        let requests = ageCountArr[upperBound] - ageCountArr[lowerBound - 1] - 1; 
        if (requests < 0) continue;
        count += requests;
    }
    return count;
};

<!--
Time complexity: O(n)
Space complexity: O(n)
-->
