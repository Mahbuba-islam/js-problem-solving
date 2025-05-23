// / Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(array){
    let lowest = array[0]
   for(const arr of array){
      if(lowest>arr){
        lowest = arr
      }

   }
   console.log(lowest)
   return lowest
}
console.log(lowestNumber([167, 190, 120, 165, 137,6]))

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let smallest = names[0]
  for(const name of names){
    if(name.length<smallest.length){
        smallest=name
    }

  }
  return smallest
}
console.log(smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']))

