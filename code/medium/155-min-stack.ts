interface ValuePair {
  value: number;
  minValue: number;
}

class MinStack {
  private stack: ValuePair[] = [];

  push(value: number): void {
    if (this.isEmpty()) {
      this.stack.push({ value: value, minValue: value });
      return;
    }
    const minValue = Math.min(this.getTopValuePair().minValue, value);
    this.stack.push({ value, minValue });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.getTopValuePair().value;
  }

  getMin(): number {
    return this.getTopValuePair().minValue;
  }

  getTopValuePair(): ValuePair {
    return this.stack[this.stack.length - 1]!;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
