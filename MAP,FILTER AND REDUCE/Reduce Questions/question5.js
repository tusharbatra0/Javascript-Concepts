// Given an array of arrays, flatten them into a single array
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
let singlearray = arrays.reduce((acc , curr) =>{
    return acc.concat(curr)
} ,[])
console.log(singlearray)
