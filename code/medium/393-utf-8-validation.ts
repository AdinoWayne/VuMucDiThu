function validUtf8(data: number[]): boolean {
    let binary = data.map((i)=>{
        let b = "00000000" + i.toString(2);
        return b.substring(b.length - 8);
    })

    let current = 0; // current UTF8 length
    for (let i=0;i<binary.length;i++) {
        let bytes = binary[i].indexOf('0');
        if (current==0) {
            if (bytes==0) continue; // skip single byte character
            if (bytes > 4 || bytes < 2) return false; // length thats > 4 or < 2 is an invalid utf encoding
            current = bytes; // set the remaining length
        } else {
            if (bytes != 1) return false
        }
        current--;
    }
    return current==0;
};
