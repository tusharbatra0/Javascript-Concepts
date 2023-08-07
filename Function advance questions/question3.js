// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.
function arrayfun(arr){
    let newarr = arr.filter((element) => {
        if(element.length > 5){
            return element
        }
      });
      return newarr
}
console.log(arrayfun(["Tushar" , "Riya" , "Vivo" , "Deepshika"]))


  
