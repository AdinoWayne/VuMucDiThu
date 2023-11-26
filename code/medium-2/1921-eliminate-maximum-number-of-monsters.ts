function eliminateMaximum(dist: number[], speed: number[]): number {
    let arr=dist.map((elem,i)=>Math.ceil(elem/speed[i])); 
    arr.sort((a,b)=>a-b);
    for(let i=1; i<arr.length; i++){
        if(arr[i]<i+1){ return i; }
    }
    return arr.length;  
};
