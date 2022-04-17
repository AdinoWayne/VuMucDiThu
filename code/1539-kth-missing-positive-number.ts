function findKthPositive(arr: number[], k: number): number {
    let i = 1;
    while(true){
        if(!arr.includes(i)){
            k--;
            if(!k) break;
        }
        i++;
    }
    return i;
};
