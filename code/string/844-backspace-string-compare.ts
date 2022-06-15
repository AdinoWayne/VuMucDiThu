function backspaceCompare(s: string, t: string): boolean {
    const S = evaluate(s)
    const T = evaluate(t)
    return S === T
};

function evaluate(str: string): string {
    const output = []
    for (const char of str) {
        if (char !== '#') {
            output.push(char)
        } else {
            output.pop()
        }
    }
    return output.join('')
}
