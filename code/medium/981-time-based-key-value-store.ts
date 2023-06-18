class TimeMap {
    obj: any;
    constructor() {
        this.obj = {};
    }

    set(key: string, value: string, timestamp: number): void {
        let obj = this.obj;
        if(!obj[key]){
            obj[key] = [];
        }
        obj[key].push([value, timestamp]);  
    }

    get(key: string, timestamp: number): string {
        let obj = this.obj;
        let out = []
        let arr = obj[key] || [];
        let end = arr.length-1;
        let start = 0;
        
    //     Doing simple binary search
        while(start<end){   
            let mid = Math.floor((start + end)/2);
            let time = arr[mid][1];
            let val = arr[mid][0];
            if(time<timestamp){
                start = mid+1;
    //             Storing the last known value which is less than timestamp
                out = arr[mid];
            }
            else if(time>timestamp){
                end = mid-1;
            }
            else{
                return val;
            }  
        }
        
        
        try{
            if(arr[end][1]<=timestamp) return arr[end][0];
            else if(out[1]<timestamp) return out[0];
        }
        catch(err){
            return "";
        }
        // return out;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
