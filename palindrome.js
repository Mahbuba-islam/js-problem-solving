// Palindrome Check – Write a function that takes a string and returns true if the string is a palindrome
//  (reads the same forwards and backwards) and false otherwise.

function palindromeChack(string){
  
  const palindrome = string.split('').reverse().join('')
  console.log(palindrome)
  if(string === palindrome){
    return true
  }
  else{
    return false
  }
}

console.log(palindromeChack('madamf'))
