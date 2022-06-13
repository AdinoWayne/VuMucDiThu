function toLowerCase(s: string): string {
    //Calculate Ascii diff from a to A
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    
    return Array
        .from(s)
        .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
        .join('');
};
