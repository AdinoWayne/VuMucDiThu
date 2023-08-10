class CombinationIterator {
    pos: any;
    arr: any;
    constructor(characters: string, combinationLength: number) {
        this.arr = this.build(combinationLength, characters.split("").sort().join(""));
        this.pos = 0;   
    }

    next(): string {
        if(this.pos<this.arr.length){
            return this.arr[this.pos++];
        }
    }

    hasNext(): boolean {
        return this.pos<this.arr.length;
    }

    build(max, str, out = [], curr = ""){
        if(curr.length === max){
            out.push(curr);
            return ;
        }
        else{
            for(let i = 0; i<str.length; i++){
                this.build(max, str.slice(i+1), out, curr + str[i]);
            }
        }
        
        return out;
    }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
