/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    iterator: Iterator
    current: {value: number, consumed: boolean}
    
    constructor(iterator: Iterator) {
        this.iterator = iterator
        
        // this.nextOrPreconsumed would also work, but doesn't fit with the laziness of iterators,
        // since we will produce a next element before we strictly need it.
        this.current = {value: undefined, consumed: true}
    }

    peek(): number {
        if (this.current.consumed) {
            this.current = this.nextOrPreconsumed()
        }
        
        // The contract doesn't specify what should happen if 
        // this.current.consumed == true
        // We just return undefined for now.
        
        return this.current.value
    }

    next(): number {
        if (this.current.consumed) {
            this.current = this.nextOrPreconsumed()
        }
        
        // The contract doesn't specify what should happen if 
        // this.current.consumed == true
        // We just ignore it for now.
        
        this.current.consumed = true
        return this.current.value
    }

    hasNext(): boolean {
        if (this.current.consumed) {
            return this.iterator.hasNext()
        }
        return !this.current.consumed
    }

    private nextOrPreconsumed(): {value: number, consumed: boolean} {
        if (this.iterator.hasNext()) {
            return {value: this.iterator.next(), consumed: false}
        }
        
        // This will happen when you peek an empty iterator.
        // I'm not sure what we should do in that case.
        // With this implementation we return undefined.
        // We can't return consumed = false, because then hasNext will be incorrect.
        // But we also can't assert in peek that the current value was not consumed.
        // Which is a bit ugly.
        return {value: undefined, consumed: true}
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
