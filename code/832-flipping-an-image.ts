function flipAndInvertImage(image: number[][]): number[][] {
    let newArray = image.map(function(item) {
        let reverse = item.reverse();
        let invert = reverse.map( x => (x + 1)%2 );
        return invert;
    })
    return newArray;
};
