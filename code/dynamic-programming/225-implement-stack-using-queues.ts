class MyStack {
    private q1;
    private q2;
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x: number): void {
        this.q1.push(x);
        return;
    }

    pop(): number {
        if (this.empty()) return -1;
        if (this.q2.length > 0) {
            return this.q2.shift();
        }
        while (this.q1.length > 0) {
            this.q2.push(this.q1.pop());
        }
        return this.q2.shift();
    }

    top(): number {
        if (this.empty()) {return -1}
        if (this.q1.length > 0) {
            return this.q1[this.q1.length - 1];
        }
        return this.q2[0];
    }

    empty(): boolean {
        return this.q1.length == 0 && this.q2.length == 0;
    }
}
