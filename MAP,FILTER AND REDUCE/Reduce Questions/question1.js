// Turn an array of numbers into a total of all the numbers
let array = [1,2,3];
let sumArray = array.reduce((acc , cur) => {
    return acc + cur
} , 0) 
console.log(sumArray)