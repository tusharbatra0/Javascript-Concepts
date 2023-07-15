// 1. Check if a number is odd or even in JavaScript

function oddoreven(num){
    if(num%2 === 0){
      console.log(`The number ${num} is a Even number`)
    }
    else{
        console.log(`The number ${num} is a Odd number`)
    }
}
oddoreven(1891)

// 2. Check if input variable is a number or not

function isaNumber(num) {

    if(isNaN(num)){
        console.log(`${num} is not a number`)
    }
    else{
      console.log(`${num} is a valid number`)
    }
  }
isaNumber("Tushar")

// 3. Find the largest of two number

function findlargestNum(num1 , num2){
  if(num1>num2){
    console.log(`${num1} is greater than ${num2}`)
  }
  else{
    console.log(`${num2} is greater than ${num1}`)
  }
}
findlargestNum(1 , 2)

// 4. Find the largest of three number
 function findlargestnumbers(n1 , n2, n3){
    if(n1>n2 && n1>n3){
      console.log(`${n1} is greater than ${n2} and ${n3}`)
    }
   else if(n2>n1 && n2>n3){
      console.log(`${n2} is greater than ${n1} and ${n3}`)
    }
    else{
      console.log(`${n3} is greater than ${n1} and ${n2}`)
    }
 }
 findlargestnumbers(12 , 81, 16)


//  5. Perform arithmetic operations on two numbers

function arithmeticOperation(number1 , number2, operation){
  if(operation === "addition"){
    console.log(`The addition of ${number1} and ${number2} is ${number1+number2}`)
  }
  else if(operation === "substraction"){
    console.log(`The substraction of ${number1} and ${number2} is ${number1-number2}`)
  }
  else if(operation === "multiplication"){
    console.log(`The multiplication of ${number1} and ${number2} is ${number1*number2}`)
  }
  else if(operation === "division"){
    console.log(`The division of ${number1} and ${number2} is ${number1/number2}`)
  }
}
arithmeticOperation(12, 3 , "division")

