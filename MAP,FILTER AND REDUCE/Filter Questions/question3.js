// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
let array = ["dog", "wolf", "by", "family", "eaten", "camping"]
let newarray = array.filter(item => {
    if(item.length >= 5){
        return item
    }
})
console.log(newarray)