// Implement a function that takes a callback function and a number, and it calls the callback function that many times.

function functimer(callback, times) {
    for (let i = 0; i < times; i++) {
      console.log(callback());
    }
  }
  
  function sayhello() {
    return "Hello World";
  }
  
  console.log(functimer(sayhello, 4));