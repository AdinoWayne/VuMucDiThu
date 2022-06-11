function licenseKeyFormatting(S: string, K: number): string {
    let newStr = S.replace(/-/g, '').toUpperCase()
    let arr = newStr.split('')

    for(let i=newStr.length - 1 -K; i>= 0; i-=K){
      arr[i] = arr[i] + '-'
    }
    
    return arr.join('')
};
