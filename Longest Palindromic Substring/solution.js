const findPalindromic = (s, leftIndex, rightIndex) => {
    while (leftIndex >=0 && rightIndex < s.length ) {
        if(s[leftIndex] !== s[rightIndex]) break;
        leftIndex--;
        rightIndex++;
    }
    return [leftIndex+1, rightIndex];
}


const longestPalindrome = s => {
    let longest = [0,1];
    //i=1 to fullfill first time to search odd palindrome
    for(let i=1; i<s.length; i++) {
        let currentLongest = [];
        let oddSet = findPalindromic(s, i-1,i+1);
        let evenSet = findPalindromic(s,i-1,i);
        currentLongest = oddSet[1] - oddSet[0] > evenSet[1] - evenSet[0] ? oddSet : evenSet;
        longest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }
    return s.slice(longest[0],longest[1]);
};
