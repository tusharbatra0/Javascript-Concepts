// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
let peoples = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
let eighteenpluspeople = peoples.filter(item =>{
    if(item.age >= 18){
        return item
    }
})
console.log(eighteenpluspeople)