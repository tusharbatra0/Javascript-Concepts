// Write a JS code to print Even numbers in given array
function Evennum(arr){
     for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%2 === 0){
           console.log(arr[i]) 
        }
     }
}
let array = [12,45,124,14,87,95,77,13]
Evennum(array)