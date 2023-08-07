// Given an array of potential voters, return an object representing the results of the vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
let agedvoters = voters.reduce((acc , curr) => {
    // 18-25
    if(curr.age >= 18 && curr.age <= 25){
        if(curr.voted === true){
             acc.numYoungVotes = acc.numYoungVotes + curr.voted
        }
        acc.numYoungPeople = acc.numYoungPeople + 1
    }
    

    // 26-35
   if(curr.age >= 26 && curr.age <= 35){
    if(curr.voted === true){
        acc.numMidVotesPeople = acc.numMidVotesPeople + curr.voted
   }
   acc. numMidsPeople = acc. numMidsPeople + 1
   }
   

// 36-55
if(curr.age >= 36 && curr.age <= 55){
    if(curr.voted === true){
        acc.numOldVotesPeople = acc.numOldVotesPeople + curr.voted
   }
   acc.numOldsPeople = acc.numOldsPeople + 1
   }
    return acc
} , { numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0 
  })
console.log(agedvoters)