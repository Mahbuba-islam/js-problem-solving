// Remove Duplicates – Given an array of numbers, write a function that removes all duplicate values and 
// returns a new array with only unique values.

 function removeDuplicate(array){
    let uniqueArray = []
    for(let i = 0; i<array.length; i++){
        console.log(array[i])
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
 }
console.log(removeDuplicate([8,9,7,8,9,65]))