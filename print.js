
// 3. FizzBuzz Challenge – Print numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, 
// and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
// -


function printFizzBuzz() {
    for (let number = 1; number <= 100; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz");
        } else if (number % 3 === 0) {
            console.log("Fizz");
        } else if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        }
    }
}

printFizzBuzz();

