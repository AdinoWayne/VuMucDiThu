function shiftGrid(grid: number[][], k: number): number[][] {
    const len = grid[0].length;
    const list = grid.reduce((acc, cur) => {
        acc.push(...cur);
        return acc;
    }, []);
    for(let i = 0; i < k; i++) list.unshift(list.pop());

    const ret = [];
    const tmp = [];
    for(let i = 1; i <= list.length; i++) {
        if(i % len === 0) {
            ret.push([...tmp, list[i - 1]]);
            tmp.length = 0;
            continue;
        }
        tmp.push(list[i - 1]);
    }
    
    return ret;
};
