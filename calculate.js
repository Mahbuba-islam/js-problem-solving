// Mr.Harun has a resturant business .
// How much he need to pay tex.
// his tax will be in 20% of his profit.

function calculateTax (income ,expenses){
 const profit = income-expenses
 const tax = 20/100
 const totalTax = profit*tax
   if (income < 0 || expenses < 0) {
        return 'Invalid input: Income and cost must be positive numbers.';
    }
    // Ensure cost is not greater than income
    if (expenses > income) {
        return 'Invalid input: Cost cannot be greater than income.';
    }

 else{
    return totalTax
  
}
}

const income = 400
const expenses = 90000
console.log(calculateTax(income ,expenses))

// calculate addmission final score
// scorring criteria
// test score = maximum 50 point
//   school grade = 30 point
// if parent farmer = 20 ponit
// if final score 80 he can admit otherwise can't
function finalScore(student){
    let finalScore = 0
    if(typeof student !== 'object' || Array.isArray(student)===true){
      return 'invalid input'
    }
    else if (student.isFamily == true){
        finalScore = student.testScore+student.schoolGrade+20
        return true
    }
    else{
       finalScore = student.testScore+student.schoolGrade
       return false
    }
  

}
 const student = {name:'rakib', testScore:45, schoolGrade:25, isFamily:false}

console.log(finalScore(student))