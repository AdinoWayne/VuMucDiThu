function imageSmoother(img: number[][]): number[][] {
    var result = [];
    var sum = 0,
        count = 0;
    for (var i=0; i<img.length; i++) {
        result[i] = [];
        for (var j=0; j<img[i].length; j++) {
            sum = img[i][j];
            count = 1;
            if ( (i-1) >= 0 ) {
                sum += img[i-1][j];
                count++;
                if ( (j-1) >= 0 ) {
                    sum += img[i-1][j-1];
                    count++;
                }
                if ( (j+1) < img[i].length ) {
                    sum += img[i-1][j+1];
                    count++;
                }
            }
            if ( (i+1) < img.length ) {
                sum += img[i+1][j];
                count++;
                if ( (j-1) >= 0) {
                    sum += img[i+1][j-1];
                    count++;
                }
                if ( (j+1) < img[i].length ) {
                    sum += img[i+1][j+1];
                    count++;
                }
            }
            if ( (j-1) >= 0 ) {
                sum += img[i][j-1];
                count++;
            }
            if ( (j+1) < img[i].length ) {
                sum += img[i][j+1];
                count++;
            }
            result[i][j] = Math.floor(sum / count);
        }
    }
    return result;
};
