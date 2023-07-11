//  Turn an array of numbers into a long string of all those numbers.
let array = [1, 2, 3]
let stringedarray = array.reduce ((accumulator,currentvalue)=>{
    return accumulator+currentvalue.toString()
} )
console.log(stringedarray)
