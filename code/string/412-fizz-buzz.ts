function fizzBuzz(n: number): string[] {
    let newList = new Array(n).fill(0)
    for (let i = 0; i < newList.length; i++) {
        newList[i] = i + 1;
        if (newList[i] % 15 == 0) {
            newList[i] = "FizzBuzz";
        } else if (newList[i] % 3 == 0) {
            newList[i] = "Fizz";
        } else if (newList[i] % 5 == 0) {
            newList[i] = "Buzz";
        }else{
            newList[i] = newList[i].toString();
        }
    }
    return newList
};
