function convertToBase7(num: number): string {
    if(num == 0) return '0';
    let res = "";
    let negative = false;
    if(num < 0){
        negative = true;
        num = num * -1;
    }
    while(num > 0){
        res = "" + num %7 + res;
        num = Math.floor(num/7);
    }
    
    if(negative){
        return '-'+res;
    }
    else{
        return res;    
    }
};
