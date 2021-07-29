/****PROBLEM 1*****/
// // Write a function below that accepts a number as the only argument.
// // The function should determine whether the number is divisible by 3,
// // and return either true or false.
// // Choose names that make the code easy to understand.
// //
// // Note:  None of the review # problems have tests included, but feel free to write your own.


// //function that accepts a number as the only argument
// let divisibleBy3 = (num) => {
    //determine whether the number is divisible by 3
//   if(num % 3 === 0){
//     return true
//   } else if((num %3 !== 0) || (typeof num !== "number"))
//   return false
// } 
// // console.log(divisibleBy3(3))//expect true
// // console.log(divisibleBy3(6))//expect true
// // console.log(divisibleBy3(2))//expect false
// //console.log(divisibleBy3(0))//expect true
// console.log(divisibleBy3("tara"))//edge case of a string instead of number expect false

/****PROBLEM 2****/
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

// let stringToNumber = (string) => {
//   //false first? make sure string is a string
//   if (typeof string !== "string"){
//     return `Please enter a string`
//   }
//   //string is a string so determine string's number of characters
//   return string.length
// }
// console.log(stringToNumber("Tara"))//expect 4
// console.log(stringToNumber("Tara Larsen"))//expect 11
// console.log(stringToNumber(5))// edge case expect "please enter a string"

/****PROBLEM 3****/
// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

//Create an array of numbers
// let arrayOfNumbers = [1, 2, 3, 4, 5]
// console.log(arrayOfNumbers[0])//expect 1
// console.log(arrayOfNumbers.length)//expect 5
// arrayOfNumbers.push(6)//add a new item to end of the array
// console.log(arrayOfNumbers)//expect [1,2,3,4,5,6]
// arrayOfNumbers.unshift([7,8,9,10])//Add an array to the beginning of the array
// console.log(arrayOfNumbers)// expect [ [ 7, 8, 9, 10 ], 1, 2, 3, 4, 5, 6 ]
// console.log(arrayOfNumbers[0][0]) //expect 7

/*****Problem 4****/
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

//Create a function
let minutesfromMidnight = () => {
  //calculates how many minutes have elapsed from midnight until right now
  //get time right now
  let now = currentDate.getTime();

}
console.log(minutesfromMidnight(new Date()))