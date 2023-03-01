function nextGreaterElement(n: number): number {
    
    var numbers = ("" + n).split('').map(n=>parseInt(n));
    var lastIncreasePosition = null;
    var smallestToSwapWithPosition;
    var i, l;
    
    for (i = 0, l = numbers.length; i < l; i++) {
        
        // Find the last increase to pin point which number needs to be increased
        // for the next lowest number
        if (numbers[i] < numbers[i + 1] && i + 1 < l) {
            
            // Save the position where we found that last increasing step
            lastIncreasePosition = i;
            
            // Our first candidate to swap with is simply the next number
            smallestToSwapWithPosition = i + 1;
        } else if (lastIncreasePosition !== null) {
            
            // Check if there is a better (smaller) number to swap with
            // Only numbers larger that the one we are swapping with are elligible
            if (numbers[smallestToSwapWithPosition] > numbers[i] && numbers[i] > numbers[lastIncreasePosition]) {
                smallestToSwapWithPosition = i;
            }
        }
    }

    // Check if we're not already at the maximum value (like 4321)
    if (lastIncreasePosition === null) {
        return -1;
    }
    
    // Do the swap. This will get us from 1243 to 1342
    let temp = numbers[lastIncreasePosition];
    numbers[lastIncreasePosition] = numbers[smallestToSwapWithPosition];
    numbers[smallestToSwapWithPosition] = temp
    
    // We're not done, we have to sort everything after lastIncreasePosition 
    // to get from 1342 to 1324
    // Slice up the part that is done and the part that needs sorting
    var sorted = numbers.slice(0, lastIncreasePosition + 1)
    var unsorted = numbers.slice(lastIncreasePosition + 1);
    
    unsorted = unsorted.sort((a,b) => a - b);
    // put em back together
    numbers = [...sorted, ...unsorted];
    
    // convert back to a number
    n = parseInt(numbers.join(''));
        
    // 32 bit int check
    if (n > 2147483647) {
        return -1;
    }
    
    return n;
};
