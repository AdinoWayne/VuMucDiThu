function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) {
        return "";
    } else if (str1 == str2){
        return str1;
    } else if (str1.length > str2.length){
        return gcdOfStrings(str1.slice(str2.length), str2);
    } else {
        return gcdOfStrings(str2.slice(str1.length), str1);
    }
};
