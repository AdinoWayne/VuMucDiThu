class MyCalendar {
    cal: any
    constructor() {
        this.cal = []
    }

    book(start: number, end: number): boolean {
        let l=0, r=this.cal.length-1
        while(l <= r){
        const mid = Math.floor((r+l)/2)
        const [s,e] = this.cal[mid]
        if(s < end && start < e ) return false
        if(start >= e){
            l = mid+1
        }else{
            r = mid-1
        }
        }  
    // The splice makes it O(n)
    this.cal.splice(l, 0 ,[start, end])
    return true
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
