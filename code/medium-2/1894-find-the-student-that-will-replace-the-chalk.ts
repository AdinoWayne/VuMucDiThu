function chalkReplacer(chalk: number[], k: number): number {
    let arr = new Array(chalk.length)
    let sum = 0
    for(let i =0; i< chalk.length; i++){
        sum += chalk[i]
        arr[i]= sum
    }
    
    k = k%sum
    if(k==0 || k < chalk[0])
        return 0
    let left = 0, right = chalk.length-1
    while(left < right){
        let mid = left + ((right - left) >> 1)
        if(arr[mid] > k){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return left
};
// TC O(n)
// SC O(n)
