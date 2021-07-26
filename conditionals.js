// Write a function that prints whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

// Example: 25 is between 0 and 50

let printNumber = (inputNum) => {
  if(inputNum >= 0 && inputNum <= 50){
    console.log(inputNum)
  } else if (inputNum >= 51 && inputNum <= 100){
    console.log(inputNum)
  } else if(inputNum > 100){
    console.log(inputNum)
  } else if(inputNum < 0) {
    console.log(inputNum)
  } else if(inputNum != "number"){
    console.log(`Please enter a number.`)
  }
}

printNumber(51);