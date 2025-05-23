// Sum of Digits – Write a function that takes a number as input and returns the sum of its digits.

function sumTotal(number){
  let sum = 0
  for(let i = 0 ; i<number.length; i++){
     console.log(i)
  sum +=number[i]
  console.log(sum)
  }
   
  return sum
}

console.log(sumTotal([1,2,3,4]))


