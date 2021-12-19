const lengthOfLongestSubstring = (s: string) => {
    let current = '';
    let largest = '';
    let splitString:string[] = s.split('');
    splitString.map((ele, index) => {
        if(!splitString.includes(ele)) {
            current += ele;
        } else {
            if(!largest || current.length > largest.length) {
                largest = current;
            }
            current = current.slice(current.indexOf(ele) + 1) + ele
        }
    })
    return Math.max(current.length, largest.length);
};