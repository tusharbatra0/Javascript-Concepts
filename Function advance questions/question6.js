// Find a number is Prime or not
function primeNumber(num){
    let isPrimeNumber = true ;
    for(let i = 2 ; i<num/2 ; i++){
        if(num % i === 0){
        isPrimeNumber = false;
        break ;
    }
    }
    if(isPrimeNumber === true){
        return (`${num} is a Prime Number`)
    }
    else{
         return (`${num} is not a Prime Number`)
    }
}
console.log(primeNumber(11))



