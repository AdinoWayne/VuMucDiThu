function maximumGroups(grades: number[]): number {
    const n = grades.length;
    let i = 1;
    while((i + 1) * i/2 < n){
        i ++;
    }
    return (i + 1) * i/2 == n? i : i -1;
};
// Time complexity: O(log n) on average and worst case, O(1) in the best case
// Space complexity: O(1)

// hint:
// Therefore, we only care about the size of the grades array, not the grades themselves.

// The number of students in l groups is l * (l + 1) / 2.

// Binary Search
// We can binary-search for maximum l so that l * (l + 1) / 2 <= n.
