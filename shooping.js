// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 
function calculateElectronicsBudget(laptopQuantity,mobileQuantity,tabletsQuantity){
   const laptopPrice = 35000
   const tabletPrice = 15000
   const mobilePrice = 20000

 const laptoTotal = laptopPrice*laptopQuantity
 const mobileTotal = mobilePrice*mobileQuantity
 const tabletTotal = tabletPrice*tabletsQuantity
 const total = laptoTotal+mobileTotal+tabletTotal
 return total

}
console.log(calculateElectronicsBudget(2,4,3))

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript 
// function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input
 

//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];

function findAveragePhonePrice(phones){
    let totalPrice = 0
  for(const phone of phones ){
    console.log(phone.price)
    totalPrice = totalPrice+phone.price
  }
  
 const average = totalPrice/phones.length
 return Math.round(average)
}

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
console.log(findAveragePhonePrice(phones))



// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the 
// result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employees) {
    let totalSalary = 0;
    for (const employee of employees) {
      console.log(employee)
        const currentSalary = employee.starting + (employee.experience * employee.increment);
        totalSalary += currentSalary; // Accumulate salary
        console.log(totalSalary,currentSalary)
    }
    return totalSalary;
}

console.log(totalSalary(employees)); // Output: Total salary for a month