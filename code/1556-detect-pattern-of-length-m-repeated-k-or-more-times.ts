function containsPattern(arr: number[], m: number, k: number): boolean {
    const n = arr.length;
    let count = 0;
    for (let i = 0; i + m < n; ++i) {      
      if (arr[i] == arr[i + m]) {
        if (++count == (k - 1) * m) return true;
      } else {
        count = 0;
      }      
    }
    return false;
};
