class SnapshotArray {
    ary: number[];
    snapCount: number;
    snapshotMap: Map<number, Map<number, number>>; // {index: {snap_id: val}}

    constructor(length: number) {
        this.snapCount = 0;
        this.snapshotMap = new Map<number, Map<number, number>>();
    }

    set(index: number, val: number): void {
        if(this.snapshotMap.has(index)){
            this.snapshotMap.get(index).set(this.snapCount, val);
        }else{
            this.snapshotMap.set(index, new Map([[this.snapCount, val]]))
        }
    }

    snap(): number {
        this.snapCount++;
        return this.snapCount-1
    }

    get(index: number, snap_id: number): number {
        if(this.snapshotMap.has(index)){
            if(this.snapshotMap.get(index).has(snap_id)){
                return this.snapshotMap.get(index).get(snap_id);
            }else{
                const snapIds = [...this.snapshotMap.get(index).keys()];
                let res = 0;
                for(let i=0; i<snapIds.length; i++){
                    const snapId = snapIds[i];
                    if(snapId>snap_id){
                        break;
                    }
                    res = this.snapshotMap.get(index).get(snapId);
                }
                return res;
            }

        }else{
            return 0;
        }
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
