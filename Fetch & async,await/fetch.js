// FETCHING MY 1st API
let result = [];
fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => {
    result = data ;
    console.log(result)
})