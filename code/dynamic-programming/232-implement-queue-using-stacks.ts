class MyQueue {
  stack: number[] = [];
  queued: number[] = [];

  push(x: number): void { // O(1)
    this.stack.push(x);    
  }

  pop(): number { // O(n) -> Amortized O(1)
    this.peek();
    return Number(this.queued.pop());
  }

  peek(): number { // O(n) -> Amortized O(1)
    if (!this.queued.length)
      while (this.stack.length)
        this.queued.push(Number(this.stack.pop()));
    
    return this.queued[this.queued.length - 1];
  }

  empty(): boolean { // O(1)
    return !(this.stack.length + this.queued.length);
  }
}
