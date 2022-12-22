function hIndex(citations: number[]): number {
    let start = 0, end = citations.length-1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(mid+1 <= citations[citations.length-mid-1]){
            start = mid + 1
            continue
        }
        end=mid-1
    }
    return start
};
