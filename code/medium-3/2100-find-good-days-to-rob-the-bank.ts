function goodDaysToRobBank(security: number[], time: number): number[] {
    const n = security.length
    const left = buildLeftValidArray(security)
    const right = buildRightValidArray(security)
    
    const result = []
    for(let i = 0; i < security.length; i++){
        if(left[i] >= time && right[i] >= time){
            result.push(i)
        }
    }
    return result
};
function buildRightValidArray(security) {
    const n = security.length
    const right = new Array(n)
    right[n-1] = 0
    for(let i = n-2; i >= 0; i--){
        if(security[i+1] >= security[i]){
            right[i] = right[i+1] +1
        } else {
            right[i] = 0
        }
    }
    return right
}

function buildLeftValidArray(security) {
    const n = security.length
    const left = new Array(n)
    left[0] = 0
    for(let i = 1; i < n; i++){
        if(security[i-1] >= security[i]){
            left[i] = left[i-1] + 1
        } else {
            left[i] = 0
        }
    }
    return left
}
// TC O(n)
// SC O(n)
