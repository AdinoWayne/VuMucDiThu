function complexNumberMultiply(num1: string, num2: string): string {
        /*
        Approach: By doing maths we know that
        (a+b)*(c+d) 
        => ac + (ad)i + (bc)i + -(db)
        => ac - db + (ad+bc)i
        Now we just need to find a,b,c,d and then calculate ac - db + (ad+bc)i
        */
        let num1Parts=num1.split("+");
        let num2Parts=num2.split("+");
        let a = parseInt(num1Parts[0]);
        let b = parseInt(num1Parts[1]);
        let c = parseInt(num2Parts[0]);
        let d = parseInt(num2Parts[1]);
        let realPart = a*c - b*d;
        let imaginaryPart = a*d + b*c;
        let ans = ""+realPart+"+"+imaginaryPart+"i";
        return ans;
};
