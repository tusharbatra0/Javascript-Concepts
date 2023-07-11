// Turn an array of numbers into a total of all the numbers
let array = [1,2,3];
let sumarray = array.reduce((accumulator,currentvalue) => {
    return accumulator + currentvalue
},0)
console.log(sumarray)