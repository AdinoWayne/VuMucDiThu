function minNumberOfFrogs(croakOfFrogs: string): number {
    let c=0
    let r=0
    let o=0
    let a=0
    let k=0
    //Make characters and sizes that are not in sequence string return -1
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') c++
        else if(croakOfFrog =='r') r++
        else if(croakOfFrog =='o') o++
        else if(croakOfFrog =='a') a++
        else if(croakOfFrog =='k') k++
        else { return -1}

        if(c<r || r<o || o<a || a<k) return -1
    }
    console.log(c,r,o,a,k)
    if(c !== r || r!== o || o!== a || a!==k) return -1
     
    //return ans
    let temp_c =0 //目前幾隻開始叫 How many are starting to call
    let max_c =0  //目前最多隻青蛙 Now have most frogs 
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') {
           temp_c++ 
           max_c = Math.max(temp_c, max_c);
        }
        if(croakOfFrog =='k'){
            temp_c--
        }

    }
    return max_c
};
// TC O(n)
// SC O(1)
