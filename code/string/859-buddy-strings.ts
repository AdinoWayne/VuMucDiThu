function buddyStrings(A: string, B: string): boolean {
    if (A.length <= 1 || B.length <=1 || A.length !== B.length){
        return false;
    }
    if (A===B) {
        let C = [...new Set(A.split(''))];
        return (C.length !== A.length);
    }
    let C = A.split('');
    let D = B.split('');
    let arr = [];
    for (let i=0;i<C.length;i++){
        if (C[i] !== D[i]){
            arr.push(C[i]);
            arr.push(D[i]);
        }
    }
     return (arr.length === 4 && arr[0] === arr[3] && arr[1] === arr[2]);
};
