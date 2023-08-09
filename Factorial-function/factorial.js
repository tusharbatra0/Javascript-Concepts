function factorial(num) {
    let num2 = num.toString(); // Convert num to string
    let realnums = num2.split("");
    let result = realnums.reduce((acc, curr) => {
        return acc * parseInt(curr);
    }, 1); 
    return result; 
}

console.log(factorial(1234567));