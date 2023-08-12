function maximumSum(arr: number[]): number {
    if (arr.length == 1) return arr[0]
    
    let noDelete = []
    let oneDelete = []
    
    noDelete[0] = arr[0]  // not delete index 0
    oneDelete[0] = 0      // delete index 0
    
    let answer = -Number.MAX_VALUE
    for (let i = 1; i < arr.length; i++) {
        noDelete[i] = Math.max(noDelete[i-1] + arr[i], arr[i])
        oneDelete[i] = Math.max(noDelete[i-1], oneDelete[i-1] + arr[i])
        
        answer = Math.max(answer, noDelete[i], oneDelete[i])
    }
    
    return answer
};
// TC O(n)
// SC O(n)
