function longestMountain(arr: number[]): number {
  let maxLength = 0;
  for(let i = 1; i < arr.length; i++) {
	const isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1];
        if(!isPeak) {
            continue;
        }
        let left = i - 1,
            right = i + 1;
        while(left >= 0 && arr[left] > arr[left - 1]) {
            left--;
        }
        while(right < arr.length && arr[right] > arr[right + 1]) {
            right++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
	}
  return maxLength;
};

// Time complexity: O(n)
// Space complexity: O(1)
