function oddCells(m: number, n: number, indices: number[][]): number {
	// Iterate over the `indices` array to create two maps,
    const maps = indices.reduce(({ rowMap, columnMap }, [r, c]) => {
		// with the amount to increment by for each row and column.
        return { 
            rowMap: rowMap.has(r) ? rowMap.set(r, rowMap.get(r) + 1) : rowMap.set(r, 1),
            columnMap: columnMap.has(c) ? columnMap.set(c, columnMap.get(c) + 1) : columnMap.set(c, 1),
        }
    }, { rowMap: new Map(), columnMap: new Map()})
    
	// Then, for each element in an m x n matrix,
    return Array.from({ length: m }, (_, r) => Array.from({ length: n }, (_, c) => {
		// add the row and column values from the appropriate map,
        return (maps.rowMap.get(r) ?? 0) + (maps.columnMap.get(c) ?? 0)  
		// flatten the matrix, filter to keep odd values, and return the number of remaining elements.
    })).flat().filter((value) => value % 2 === 1).length
};
