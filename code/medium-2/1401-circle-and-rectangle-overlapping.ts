function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {
    const xEdge = Math.max(x1, Math.min(x2, xCenter));
    const yEdge = Math.max(y1, Math.min(y2, yCenter));
    const xDistance = xCenter - xEdge;
    const yDistance = yCenter - yEdge;

    return xDistance ** 2 + yDistance ** 2 <= radius ** 2
};
