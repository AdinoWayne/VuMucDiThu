function maskPII(S: string): string {
    if (isEmail(S)) return maskEmail(S);
    return maskPhone(S);
    
    function isEmail(str: string): boolean {
       return /^[A-Za-z]{2,}@[A-Za-z]{2,}.[A-Za-z]{2,}$/.test(str);
    }
    
    function maskEmail(str: string): string {
        let res = "";
        const [local, domain] = str.split("@");
        
        res += local.charAt(0).toLowerCase() + "*****" + local.charAt(local.length - 1).toLowerCase();
        return res + "@" + domain.toLowerCase(); 
    }
    
    function maskPhone(str: string): string {
        const onlyDigits = str.replace(/\D/g, "");
        
        const localNum = "***-***-" + onlyDigits.substring(onlyDigits.length - 4);
        
        if (onlyDigits.length === 10) return localNum;
        
        let countryNum = "+" + "*".repeat(onlyDigits.length - 10) + "-";
        
        return countryNum + localNum;
    } 
};
