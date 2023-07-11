//  Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
let array = [3, 6, 8, 2];
let newarray = array.filter(item => {
    if(item>=5){
        return item
    }
})
console.log(newarray)