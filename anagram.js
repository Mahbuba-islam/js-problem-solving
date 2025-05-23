// Anagram Checker – Write a function that takes two strings as inputs and returns true if they are anagrams 
// of each other (contain the same characters in a different order).

function anagramCheck(str1, str2) {
    // Remove spaces, convert to lowercase, and sort characters
    let sortedStr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(anagramCheck("listen", "silent"));  // Output: true
console.log(anagramCheck("hello", "yes"));     // Output: false