// function to find odd and even number
const oddorevennum = (num) => {
    if(num%2 === 0){
        return `The ${num} is a Even Number`
    }
    else{
        return `The ${num} is a Odd Number`
    }
}
console.log(oddorevennum(121))