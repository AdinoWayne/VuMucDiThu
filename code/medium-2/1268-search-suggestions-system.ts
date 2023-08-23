function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();
    let res = [];
    for (let i=0;i<searchWord.length;i++) {
        products = products.filter((p)=>p[i]==searchWord[i]);
        res.push(products.slice(0, 3));
    }
    return res;
};
// TC O(n2)
// SC O(n)
