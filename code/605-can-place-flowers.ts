function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    var r = 0;
    const l = flowerbed.length;
    for(var i = 0;i< l; i++) {
        if(flowerbed[i]==0 && flowerbed[i-1]!==1 && flowerbed[i+1]!==1) {
            ++r;
            flowerbed.splice(i,1,1);
            // flowerbed[i] = 1;
        }
    }
    if (n<=r) { 
        return true
    } else {
        return false 
    };
};
