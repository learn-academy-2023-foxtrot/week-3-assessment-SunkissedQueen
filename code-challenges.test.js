// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.
// From Developer Dre

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciFunc",() => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.", () => {
    const fibonacciLength1 = 6
    const fibonacciLength2 = 10
    expect(fibonnaciFunc(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonnaciFunc(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//GOOD FAILURE
//ReferenceError: fibonnaciFunc is not defined
 
// b) Create the function that makes the test pass.

// Pseudo code:
// name: fibonnaciFunc
// input: number
// output: an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.
// process: using conditionals, make sure if the number is less than two, you return a string asking for a greater number. Then, for a length of 2, return [1, 1], then create a variable called fibonnaci sequence that will hold the start of the function which is [1,1]. Then, create a for loop where you add the first number to the second number, creating a variable that stores this so that then you can push the next number to the fibonnacci sequence variable you created. 

// const fibonnaciFunc = (number) => {
//   if (number === 2) {
//     return [1, 1]
//   } else if (number > 2) {
//       const fibonacciSequence = [1, 1];
//       for (let i = 2; i < number; i++) {
//         const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//         fibonacciSequence.push(nextNumber);
//       }
//       return fibonacciSequence;
//   } else {
//     return "Please enter a length greater than 2"
//   }
// }

// console.log(fibonnaciFunc(1))
// console.log(fibonnaciFunc(fibonacciLength2))

//TEST PASSED

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
// From Developer Xe

// a) Create a test with expect statements for each of the variables provided.
describe("objectsomething", ()=> {
    it("returns an array with sorted values", () => {
      const studyMinutesWeek1 = {
        sunday: 90,
        monday: 30,
        tuesday: 20,
        wednesday: 15,
        thursday: 30,
        friday: 15,
        saturday: 60
      }
      // Expected output: [15, 15, 20, 30, 30, 60, 90]
      const studyMinutesWeek2 = {
        sunday: 100,
        monday: 10,
        tuesday: 45,
        wednesday: 60,
        thursday: 20,
        friday: 15,
        saturday: 65
      }
      // Expected output: [10, 15, 20, 45, 60, 65, 100]
      expect(objectsomething(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(objectsomething(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  })
  
  
  // b) Create the function that makes the test pass.
  
  // Pseudo code:
  // INPUT: an array of objects with key:vlaues
  // OUTPUT: an array with sorted values from least to greatest
  // PROCESS:
  // Check out resource: Object.values() 
  // create a function that takes in a parameter (to make function reusable)
  // return Object.values() with a built in method for array .sort 
  // since the jest test returns the first array fibSequenceImplement as passed and the second array is returned not passed. this is a bad failure becuase array is sorting but number 100 is inserted second after number 10
  // since .sort assumes that the string is being sorted it return 100 after 10 and not at the end as the highest number
  // using an anonymouse function ()=>{} i will pass parameters a and b and return a-b. this will turn our array into numbers. Anythins with negative output will go to the right of the array as the bigger number. pisitive output  will go to the left and 0 will stay in the middle. this way the array will turn into numbers and sort proporly.
  
  // const objectsomething = (stuff) => {
  //   return Object.values(stuff).sort((a, b) => a - b)
  // }
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// From Developer Roniel

// a) Create a test with expect statements for each of the variables provided.

describe("accSum", () => {
  it("returns an array", () => {
    expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accSum(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:
// Name: accArr
// Input: array
// Output: array
// Process: create a function that will take in a array and output array with an accumulating sum and a empty array should return an empty array.

// Step 1: create variable for 0 index
// Step 2: add 1st index to 0 index
// Step 3: add 2nd index to 0 index
// Step 4: add 3rd index to 0 index

// *** I did things a little different the second go around
// step 1 create variable for return array
// step 2 set return array and parameter index
// step 3 iterate through array
// step 4 create sum variable and have it equal return array's index value minus 1 plus parameter's index.
// step 5 return return array's index plus the sum.


// const accSum = (arr) => {
//   const returnArr = []
//   returnArr[0] = arr[0]

//   for(let i = 1; i < arr.length; i++){
//     const sum = returnArr[i-1] + arr[i]
//     returnArr[i] = sum
    
//   }
//   return returnArr
// }