class ListNodeElement {
    value: number;
    next: ListNodeElement | null;
    prev: ListNodeElement | null;

    constructor(value: number, next: ListNodeElement | null, prev: ListNodeElement | null) {
        this.value = value;
        this.next = next;
        this.prev = prev
    }
}
class MyCircularDeque {
    private maxLength: number
    private numberOfItems: number
    private root: ListNodeElement | null;
    private tail: ListNodeElement | null;
    constructor(k: number) {
        this.maxLength = k;
        this.numberOfItems = 0;
        this.root = null
        this.tail = null;
    }

    insertFront(value: number): boolean {
        if (this.numberOfItems + 1 > this.maxLength) return false;
        if (!this.root) {
            this.root = new ListNodeElement(value, null, null)
            this.tail = this.root;
        } else {
            const newNode = new ListNodeElement(value, null, null);
            newNode.next = this.root;
            this.root.prev = newNode;
            this.root = newNode;
            if (this.tail) this.tail.next = this.root
        }
        this.numberOfItems += 1;
        return true
    }

    insertLast(value: number): boolean {
        if (this.numberOfItems + 1 > this.maxLength) return false;
        if (!this.root) {
            this.root = new ListNodeElement(value, null, null)
            this.tail = this.root;
        } else {
            const newNode = new ListNodeElement(value, null, null);
            if (this.tail) {
                this.tail.next = newNode;
                newNode.next = this.root;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
        this.numberOfItems += 1;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false;
        if (this.numberOfItems === 1) {
            this.root = null;
            this.tail = null;
            this.numberOfItems -= 1
            return true;
        }
        if (this.root) {
            this.root = this.root.next;
            if (this.tail) this.tail.next = this.root;
            this.numberOfItems -= 1
            return true
        }
        return false
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false;
        if (this.numberOfItems === 1) {
            this.root = null;
            this.tail = null;
            this.numberOfItems -= 1
            return true;
        }
        if (this.tail) {
            const prev = this.tail.prev;
            const next = this.tail.next;
            if (prev && next) {
                prev.next = next.next
                this.tail = prev;
                this.numberOfItems -= 1
                return true;
            }
        }
        return false
    }

    getFront(): number {
        return this.root?.value ?? -1
    }

    getRear(): number {
        return this.tail?.value ?? -1
    }

    isEmpty(): boolean {
        return this.numberOfItems === 0
    }

    isFull(): boolean {
        return this.numberOfItems >= this.maxLength;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
