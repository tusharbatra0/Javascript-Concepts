function celtofer(celsius){
    let ferhenheit = (celsius * 9/5 ) + 32 ;
    return ferhenheit
}

function celtokel(celsius){
    let kelvin = celsius + 273.15;
    return kelvin
}

console.log(celtofer(32) , celtokel(32))