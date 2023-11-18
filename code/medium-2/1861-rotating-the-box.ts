function rotateTheBox(box: string[][]): string[][] {
    const R = box.length;
    const C = box[0].length;
    
    const ans = Array.from({length: C}, () => Array.from({length: R}, () => '.'));
    
    for (let i = 0; i < R; i++) {
        
        // maintain the index of stone insertion
        let insRow = C - 1;
        
        for (let j = C - 1; j >=0; j--) {
            const el = box[i][j];
            if (el === '*') {
                ans[j][R - i - 1] = '*';
                insRow = j - 1;
            } else if (el === '#') {
                ans[insRow][R - i - 1] = '#';
                insRow--;
            }
        }
    }
    
    return ans;
};
