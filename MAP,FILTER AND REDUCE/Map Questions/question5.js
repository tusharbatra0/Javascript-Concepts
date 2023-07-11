// 
let array = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
let names = array.map(item => {
     if(item.age >= 18){
        return item.name + " Can go to the matrix"
     }
     else{
        return item.name + " Cannot go the Matrix"
     }
})
console.log(names)