// Given an array of numbers, return a new array that only includes the even numbers.
let array = [3, 6, 7, 2, 9, 12, 90, 97]
let evennumArray = array.filter(item => {
    if(item %2 === 0){
        return item
    }
})
console.log(evennumArray)