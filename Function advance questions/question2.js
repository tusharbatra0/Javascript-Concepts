// String Palindrome checker

function palindromeChecker(str){
    let newstr =  str.split("") ;
    let reversedstr = newstr.reverse("");
    let result = reversedstr.join("")
    // return result~
    if(str === result){
        return `${str} is a Palindrome`
    }
    else{
        return `${str} is not a Palindrome`
    }
}
console.log(palindromeChecker("kanak"))