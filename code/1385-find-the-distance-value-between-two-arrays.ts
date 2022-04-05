function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let res = 0;
    for(let i=0; i<arr1.length; i++) {
        let found_err = false;
        for(let j=0; j<arr2.length && !found_err; j++) {
            if( Math.abs( arr1[i] - arr2[j] ) <= d )
                found_err = true;
        }
        res += found_err ? 0 : 1;
    }
    return res;
};
