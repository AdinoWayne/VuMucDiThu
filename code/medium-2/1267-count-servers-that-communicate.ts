function countServers(grid: number[][]): number {
    let servers = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) servers.push([i,j]);
        }
    }
    let cs = [];
    servers.forEach(([x,y]) => {
        let xs = servers.filter(s => s[0] === x || s[1] === y);
        if (xs.length > 1) cs.push([x,y]);
    });

    return cs.length;
};
