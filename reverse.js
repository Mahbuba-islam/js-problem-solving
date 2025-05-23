// Write a function that takes a string as input and returns it reversed.
// Example:
// reverseString("hello"); // Output: "olleh"

function reverseString(string){
  let reverse = string.split('').reverse().join('')
  console.log(reverse)
  return reverse
}

console.log(reverseString('hello'))


// another way reverse
function reverseString2(string2){
  let reverse = []
  for(const char of string2){
  
    reverse.unshift(char)
  
  }
  return reverse.join('')
}

console.log(reverseString2('yes'))

// reverse array
function reverseArray(array){
  let reverse = []
  for(const arr of array){
  
    reverse.unshift(arr)
  
  }
  return reverse
}

console.log(reverseArray([8,9,6,7]))
console.log(reverseArray(['riya','tiya','mofiz']))


