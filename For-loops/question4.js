// Write a JS code to calculate the sum of digits in a array
function sumofArray(array){
    let sum = 0 ;
for(let i = 0; i<array.length ; i++){
    sum = sum + array[i]
}
return sum
}
let arr = [1,2,46,25,23,553]
console.log(sumofArray(arr))