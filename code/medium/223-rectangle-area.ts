function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    const maxStart1 = Math.max(ax1, bx1);
    const minEnd1 = Math.min(ax2, bx2);
   
    const width = Math.abs(maxStart1 - minEnd1);
    
    const minStart2 = Math.min(ay2, by2);
    const maxEnd2 = Math.max(ay1, by1);
    
    const height = Math.abs(minStart2 - maxEnd2);
    
    let overLapArea = 0;
    
    if (maxStart1 <= minEnd1 && maxEnd2 <= minStart2) {
        overLapArea = width * height;
    }
    const rectArea1 = calculateArea(ax1, ay1, ax2, ay2);
    const rectArea2 = calculateArea(bx1, by1, bx2, by2);
    
    return rectArea1 + rectArea2 - overLapArea;
} 

function calculateArea(x1, y1, x2, y2) {
    const width = Math.abs(x1 - x2);
    const height = Math.abs(y1 - y2);
    return width * height;
}
