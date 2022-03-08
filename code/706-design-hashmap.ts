class MyHashMap {
    map_table: Map<number, number>;
    constructor() {
        this.map_table = new Map();
    }

    put(key: number, value: number): void {
        this.map_table.set(key, value)
    }

    get(key: number): number {
        if (!this.map_table.has(key)) {
            return -1;
        }
        return this.map_table.get(key)
    }

    remove(key: number): void {
        this.map_table.delete(key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
