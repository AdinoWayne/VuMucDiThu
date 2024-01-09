function numberOfWeakCharacters(properties: number[][]): number {
    properties.sort((a,b) => (a[0] == b[0]) ? (a[1]-b[1]) : (b[0]-a[0]))
    let count = 0, max = 0
    for(let arr of properties){
        if(arr[1] < max)    count++
        max = Math.max(max, arr[1])
    }
    return count
};
// TC O(nLogn)
// SC O(1)
