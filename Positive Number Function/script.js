function positiveNum(arr){
    let positivenumarr = arr.filter(item => {
        if(item>0){
            return item
        }
    })
    return positivenumarr
}
console.log(positiveNum([1,-1,2,-2,90,-91]))