// Write a function that takes a sentence as input and returns the number of words in that sentence.

function sentanceCounter(sentance){
    let words = sentance.split(" ");
    let result = words.length;
    return result;
}
 console.log(sentanceCounter("Hello guys, How are you?"));