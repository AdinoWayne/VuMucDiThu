function leastInterval(tasks: string[], n: number): number {
  // the map will be our tracking mechanism
  let m = new Map();
  
  // the max occurrences
  let maxVal = 0;
  
  // the number of tasks that has the max occurrences
  let maxValCount = 0;
  
  for(let k of tasks){
    let tVal = m.has(k) ? m.get(k)+1: 1;
    m.set(k, tVal);
	// set our maxVal and number of maxVal tasks only if we have a new max
    if(tVal > maxVal){
      maxVal = tVal;
      maxValCount = 1;
	// otherwise, increment number of maxVal tasks
    } else if(tVal === maxVal){
      maxValCount++;
    }
  }
  // our formula, handle the edge case
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
// Time complexity is O(n)
// Space complexity is O(k)

// resultCount = (maxOccurrences - 1) * (n + 1) + (numMaxTasks)
// As seen in case 3, we know that we need to multiply times maxOccurences.
// We must subtract 1 because we dont need to have any empty spaces or filling after the last occurence, at the end.
