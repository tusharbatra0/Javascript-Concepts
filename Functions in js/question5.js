// Write a function to calculate simple interest based on the principle amount
const simpleinterest = (principle , rate , time) => {
    let interest = principle*rate*time/100
    return `The simple interest is ${interest}`
}
console.log(simpleinterest(100000,10,2))
