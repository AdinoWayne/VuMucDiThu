function mySqrt(x: number): number {
    let sqrt = 1;
    if(x===0){
        return 0;
    }
    for(let i=1; i*i<=x; i++){
      sqrt = i;
    }
    return sqrt;
};
