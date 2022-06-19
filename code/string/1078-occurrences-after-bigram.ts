function findOcurrences(text: string, first: string, second: string): string[] {
        let data = text.split(" ")
        let [pre, cur] = ["", ""];
        let res = [];
        for (let s of data) {
            if (pre == first && cur == second) {
                res.push(s);
            }
            [pre, cur] = [cur, s]
        }
        return res;

};
