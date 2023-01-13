function lengthLongestPath(input: string): number {
    let dir = input.split('\n');
    let max = 0;
    let length = [];
    let depth= 0;
    for (let i=0;i<dir.length;i++) {
        depth = dir[i].lastIndexOf('\t')+1;
        if (dir[i].includes('.')) {
            let fileLength = dir[i].length-depth;
            max = Math.max((length[depth-1]+1||0) + fileLength , max);
        } else {
            length[depth] = dir[i].length - depth + (length[depth-1]+1||0);
        }
    }
    return max;
};
