// - Check Prime Number
// Write a function that checks if a number is prime.
// Example: 7 → true, 10 → false


function checkPrimeNumber(number){
  if(number%2 !== 0){
    return true
  }
  else{
    false
  }
}
console.log(checkPrimeNumber(7))