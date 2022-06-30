function isPathCrossing(path: string): boolean {
    const currentPoint = [0,0]
    const map = {}
    map[JSON.stringify(currentPoint)]=true
    for (let e of path.split('')) {
        if (e=='N') {
            currentPoint[1]++
        }else if (e=='E') {
            currentPoint[0]++
        }else if (e=='S') {
            currentPoint[1]--
        }else if (e=='W') {
            currentPoint[0]--
        }
        if (map[JSON.stringify(currentPoint)]) {
            return true
        }else{
            map[JSON.stringify(currentPoint)]=true
        }
    }
    return false
};
