function peakIndexInMountainArray(arr: number[], low = 0, high = arr.length - 1): number {
    if (!arr.length) 
        return -1
    
    const mid = ((low + high) / 2) | 0
	
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])
        return mid
    
    if (arr[mid] < arr[mid - 1]) 
        return peakIndexInMountainArray(arr, low, mid)
    
    if (arr[mid] < arr[mid + 1])
        return peakIndexInMountainArray(arr, mid, high)
};
