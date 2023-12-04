function evaluate(s: string, knowledge: string[][]): string {
    let stack = [];
    let hash = {};
    for(let tuple of knowledge){
        let [key, value] = tuple;
        hash[key] = value;
    }
    for(let char of s){
        if(char === ')'){
            let key = '';
            while(stack[stack.length-1] !== '('){
                key = stack.pop() + key;
            }
            stack.pop();
            stack.push(hash[key] || '?');
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};
// TC O(n)
// SC O(n)
