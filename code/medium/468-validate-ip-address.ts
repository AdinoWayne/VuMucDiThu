function validIPAddress(queryIP: string): string {
    let output = "Neither"
    if (queryIP.length === 0) return output
    let ipv4 = queryIP.split('.')
    let ipv6 = queryIP.split(':')
    if (ipv4.length === 4 && ipv4.every(validIPv4)){
        output = 'IPv4'
    } 
    if (ipv6.length === 8 && ipv6.every(validIPv6)){
        output = 'IPv6'
    }
    return output
};

function validIPv4(str: string): boolean {
    let num = '0123456789'
    if (str === "" || str.length > 4) return false
    if (str.length > 1 && str.charAt(0) === '0') return false
    if (str.split('').some(char => !num.includes(char))) return false
    if (Number(str) < 0 || Number(str) > 255) return false
    return true
}

function validIPv6(str: string): boolean {
    let hex = '0123456789abcdefABCDEF'
    if (str.length === 0 || str.length > 4) return false
    for (let char of str){
        if (!hex.includes(char)) return false
    }
    return true
}
