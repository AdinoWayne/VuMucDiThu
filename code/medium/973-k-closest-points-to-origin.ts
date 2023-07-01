function kClosest(points: number[][], k: number): number[][] {
    quickSelect(points, k, 0, points.length - 1)
    return points.slice(0, k)
};

function quickSelect(points, K, low, high) {
    if (low >= high) {
        return
    }
    
    const partPoint = partition(points, low, high)
    
    if (partPoint === K - 1) {
        return
    }
    if (partPoint < K - 1) {
        quickSelect(points, K, partPoint + 1, high)
    } else {
        quickSelect(points, K, low, partPoint - 1)
    }
}

function partition(points, low, high) {
    const pivot = points[high]
    let i = low
    let j = low
    while (i < high) {
        if (getDist(points[i]) < getDist(pivot)) {
            swap(points, i, j)
            j++
        }
        i++
    }
    swap(points, high, j)
    return j
}

function getDist(point) {
    return point[0] * point[0] + point[1] * point[1]
}

function swap(arr, i, j) {
    const temp = arr[i] 
    arr[i] = arr[j]
    arr[j] = temp
}
// Time complexity: O(n) in the average case and O(n^2) in the worst case
// Space complexity: O(1)
