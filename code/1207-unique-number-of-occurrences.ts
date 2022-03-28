function uniqueOccurrences(arr: number[]): boolean {
    let obj = {}
    for(let num of arr){
        if(obj[num] === undefined){
            obj[num]= 1;
        }else{
            obj[num] +=1;
        }
    }
    let oArray = Object.values(obj);
    return oArray.length === (new Set(oArray)).size
};
