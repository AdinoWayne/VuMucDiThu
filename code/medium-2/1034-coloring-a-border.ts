function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const visited = new Set();
	const pixel = grid[row][col];

	const traverse = (x, y) => {
		const key = `${x}, ${y}`;

		if (visited.has(key)) return 1;

		if (x < 0 || x === grid.length) return 0;
		if (y < 0 || y === grid[0].length) return 0;
		if (grid[x][y] !== pixel) return 0;

		visited.add(key);

		let invalid = 1;
		directions.forEach(([dx, dy]) => {
			invalid *= traverse(x + dx, y + dy);
		});

		// if all 4 adjacents are the same, don't change
		// if any of the adjacent are different, change color
		if (invalid) return 1;
		else grid[x][y] = color;

		return 1;
	};

	traverse(row, col);
	return grid;
};
// TC O(n)
// SC O(n)
