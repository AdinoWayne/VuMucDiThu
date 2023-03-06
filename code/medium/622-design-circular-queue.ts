class MyCircularQueue {
    private queue: Array<number>;
    private length: number;
    private size: number;
    private head: number;
    private tail: number;
    constructor(k: number) {
        this.queue = new Array(k);
        this.length = k;
        this.size = 0;
        this.head = this.tail = 0; // the tail is behind the last element
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        this.size++;
        this.queue[this.tail] = value;
        this.tail = (this.tail + 1) % this.length;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;
        this.size--;
        this.head = (this.head + 1) % this.length;
        return true;
    }

    Front(): number {
        if (this.isEmpty()) return -1;
        return this.queue[this.head];
    }

    Rear(): number {
        if (this.isEmpty()) return -1;
        const index = (this.tail + this.length - 1) % this.length;
        return this.queue[index];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.length;
    }
}
