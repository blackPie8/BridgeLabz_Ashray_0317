class FreqStack {
    constructor() {
        this.freq = new Map();
        this.group = new Map();
        this.maxFreq = 0;
    }

    push(x) {
        this.freq.set(x, (this.freq.get(x) || 0) + 1);
        const f = this.freq.get(x);

        if (f > this.maxFreq) {
            this.maxFreq = f;
        }

        if (!this.group.has(f)) {
            this.group.set(f, []);
        }
        this.group.get(f).push(x);
    }

    pop() {
        const x = this.group.get(this.maxFreq).pop();

        this.freq.set(x, this.freq.get(x) - 1);

        if (this.group.get(this.maxFreq).length === 0) {
            this.maxFreq--;
        }

        return x;
    }
}

const freqStack = new FreqStack();
freqStack.push(5);
freqStack.push(7);
freqStack.push(5);
freqStack.push(7);
freqStack.push(4);
freqStack.push(5);

console.log(freqStack.pop());
console.log(freqStack.pop());
console.log(freqStack.pop());
console.log(freqStack.pop());
