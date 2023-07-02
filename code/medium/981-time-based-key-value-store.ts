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
 * 
 * var param_2 = obj.get(key,timestamp)
 * The time complexity of the set function is O(1) because it is a simple insertion into an array.
 * The time complexity of the get function is O(log n) because it uses binary search to find the correct value.
 * The space complexity of the class is O(n) because it stores all the values in an object.
 */
