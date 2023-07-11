// 6) Make an array of the names in h1s, and the ages in h2s
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
  ];
  let newarray = array.map(item =>{
    return "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>" 
  })
  console.log(newarray)