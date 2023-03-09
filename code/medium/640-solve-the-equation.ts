function solveEquation(equation: string): string {
    const parts = equation.split("=");
    const left = parse(parts[0]);
    const right = parse(parts[1]);
    
    const num = left[0] - right[0];
    const x = right[1] - left[1];
    
    if (x === 0) return num === 0 ? "Infinite solutions" : "No solution";
    
    return `x=${num / x}`;
};

var parse = function(str) {
    let plusSIgn = true;
    let num = 0;
    let xNum = 0;
    let end;
    
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === "-") {
            plusSIgn = false;
        } else if (str[i] === "+") {
            plusSIgn = true;
        } else {
            end = i + 1;
            while (str[end] && str[end] !== "+" && str[end] !== "-") {
                ++end;
            }
            
            if (str[end - 1] === "x") {
                xNum += (str.substring(i, end - 1) || 1) * (plusSIgn ? 1 : -1);
            } else {
                num += str.substring(i, end) * (plusSIgn ? 1 : -1);
            }
            i = end - 1;
        }
    }
    
    return [num, xNum];
}
