function reorderedPowerOf2(n: number): boolean {
    if(n===1) return true;
    let total = 1;
    let i = 1;
	// coverting the given number and sorted that with any order(ASC/DESC) 
    let nTemp = n.toString().split('').sort((a,b)=>parseInt(a)-parseInt(b)).join('');
	// If the length of the string is more than the given one means we can break the loop and return false 
    while(total.toString().length<=n.toString().length){
        total = Math.pow(2,i);
        let tTemp = total.toString().split('').sort((a,b)=>parseInt(a)-parseInt(b)).join('');
		// Comparing the pow of 2 and the given number
        if(tTemp===nTemp) return true;
        i++;
    }
    return false;
};

// Time complexity: O(n2logN)
// Space complexity: O(1)
