function destCity(paths: string[][]): string {
    let f;
    let set= new Set();
    for(let i=0;i<paths.length;i++){
        set.add(paths[i][0]);
    }
    for(let i=0;i<paths.length;i++){
         if(!set.has(paths[i][1])){
               f=paths[i][1];
               break;
         }
    }
    return f; 
};
