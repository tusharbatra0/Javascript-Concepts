//  Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
let array = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
let newarray = array.filter(item => {
    if(item.member === true){
        return item
    }
})
console.log(newarray)