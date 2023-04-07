function repeatedStringMatch(a: string, b: string): number {
    let num=Math.ceil(b.length/a.length); // rounding on
    if(a.repeat(num).includes(b)){
        return num;
    }
    if(a.repeat(num+1).includes(b)){
        return num+1;
    }
    return -1;
};
