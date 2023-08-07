//  Write a function to reverse a number
const reversenum = (num) => {
    let reverse = "" ;
    let i = 0 ;
    while(num>0){
     reverse = reverse * 10 + (num%10);
     num = Math.floor(num / 10);;
}
return reverse
}
console.log(reversenum(123))