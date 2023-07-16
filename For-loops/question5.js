// Write a JS code to find product of two arrays
function productofArrays(arr1, arr2) {
   var arrProduct = arr1.length>arr2.length ? arr1 : arr2;
   for(var i=0; i < Math.min(arr1.length, arr2.length); i++){
      arrProduct[i] = arr1[i] * arr2[i]; 
   }
   return arrProduct;
 }
 var arr1 = [3,45,23,78,34];
 var arr2 = [4,2,34,4,12,1];
 
 console.log(productofArrays(arr1,arr2));