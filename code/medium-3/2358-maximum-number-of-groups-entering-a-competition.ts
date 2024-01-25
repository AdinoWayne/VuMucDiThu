function maximumGroups(grades: number[]): number {
    const n = grades.length;
    
    let i = 1;
    
    while((i + 1) * i/2 < n){
        i ++;
    }
        
    return (i + 1) * i/2 == n? i : i -1;
};
