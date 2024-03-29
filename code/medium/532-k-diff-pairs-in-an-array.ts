function findPairs(nums: number[], k: number): number {
	if(nums.length === 0 || k < 0) return 0
	let myMap = new Map(),
		count = 0
	//Get wordcount
	for(let num of nums){
		myMap.set(num,(myMap.get(num)+1) || 1)
	}
	
	//search solutions
	myMap.forEach((value,key) =>{
		if(k === 0){
			if(value > 1) count++
		}
		else{
			if(myMap.has(key+k)) count++
		}
	})

	return count
};

// Time Complexity: O(n)

// Space Complexity: O(n)
