// Q1: Create a function that takes a string as input and returns the reverse of that string

function reversestring(str){
  let newstr =  str.split("") ;
  let reversedstr = newstr.reverse("");
  let result = reversedstr.join("")
  return result
}

console.log(reversestring("Tushar"))
