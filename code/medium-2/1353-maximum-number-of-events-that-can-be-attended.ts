function maxEvents(A: number[][], m = new Map()): number {
    for (let [i, j] of A) {
        if (!m.has(i))
            m.set(i, []);
        m.get(i).push(j);
    }
    let [q, take] = [[], []];
    for (let i = 1; i <= 1e5; ++i) {
        while (q.length && q[0] < i)
            heappop(q);
        for (let j of m.get(i) || [])
            heappush(q, j);
        if (q.length)
            take.push(heappop(q));
    }
    return take.length;
};

let key = x => Array.isArray(x) ? x[0] : x;
let heappush = (A, x, f = Math.min) => {
    let P = i => Math.floor((i - 1) / 2);  // parent
    A.push(x);
    let N = A.length,
        i = N - 1;
    while (0 < i && key(A[i]) == f(key(A[i]), key(A[P(i)]))) {
        [A[i], A[P(i)]] = [A[P(i)], A[i]];
        i = P(i);
    }
};
let heappop = (A, f = Math.min) => {
    let L = i => 2 * i + 1,  // children
        R = i => 2 * i + 2;
    let N = A.length,
        i = 0;
    let top = A[0];
    [A[0], A[N - 1]] = [A[N - 1], A[0]], A.pop(), --N;
    let ok;
    do {
        ok = true;
        let left = f == Math.min ? Infinity : -Infinity,
            right = left;
        if (L(i) < N && key(A[i]) != f(key(A[i]), key(A[L(i)]))) ok = false, left  = key(A[L(i)]);
        if (R(i) < N && key(A[i]) != f(key(A[i]), key(A[R(i)]))) ok = false, right = key(A[R(i)]);
        if (!ok) {
            let j = left == f(left, right) ? L(i) : R(i);
            [A[i], A[j]] = [A[j], A[i]];
            i = j;
        }
    } while (!ok);
    return top;
};
