function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
	const distance = (a, b) => {
		const [aX, aY] = a;
		const [bX, bY] = b;
		return (aX - bX) ** 2 + (aY - bY) ** 2;
	};

	const set = new Set([
		distance(p1, p2),
		distance(p1, p3),
		distance(p1, p4),
		distance(p2, p3),
		distance(p2, p4),
		distance(p3, p4),
	]);

	return !set.has(0) && set.size === 2;
};

// Check if the coordinates are square, we calculate the distance between the points.
