function hasAlternatingBits(n: number): boolean {
    let str = n.toString(2);
    if(str.indexOf('00') == -1 && str.indexOf('11') == -1)
        return true;
    return false;
};
