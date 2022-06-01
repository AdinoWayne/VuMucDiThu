function canConstruct(ransomNote: string, magazine: string): boolean {
    let arr = magazine.split('')
    for(let i = 0; i <ransomNote.length; i++){
        let index = arr.indexOf(ransomNote[i])
        if(index === -1){
            return false
        } else {
            arr.splice(index, 1)
        }
    }
    return true
};
