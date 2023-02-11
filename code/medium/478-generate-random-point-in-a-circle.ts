class Solution {
    radius: number
    x_center: number
    y_center: number
    constructor(radius: number, x_center: number, y_center: number) {
        this.radius = radius;
        this.x_center = x_center;
        this.y_center = y_center;
    }

    randPoint(): number[] {
        let x = 1;
        let y = 1;
        while(x*x + y*y > 1){
            x = 2*Math.random() - 1;
            y = 2*Math.random() - 1;
        }
        return [this.x_center + this.radius*x, this.y_center + this.radius*y]
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
