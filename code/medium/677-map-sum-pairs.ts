interface StringArray {
  [index: string]: number;
}

class MapSum {
    map: StringArray
    constructor() {
        this.map = {};
    }

    insert(key: string, val: number): void {
        this.map[key] = val;
    }

    sum(prefix: string): number {
        return Object.keys(this.map)
            .filter(key=>key.startsWith(prefix))
            .map(key=>this.map[key])
            .reduce((total, curr)=>total+curr, 0);
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
