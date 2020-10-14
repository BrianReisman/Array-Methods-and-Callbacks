import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


let year = (fifaData[fifaData.length-1]);
// console.log (year["Home Team Name"]);
// console.log (year["Away Team Name"]);
// console.log (year["Home Team Goals"]);
// console.log (year["Away Team Goals"]);
//     if(year["Home Team Goals"] > year["Away Team Goals"]){
//         console.log(`The ${year["Home Team Name"]} team won`);
//     } else {
//         console.log(`The ${year["Away Team Name"]} team won`);
//     }


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
/*  
[x]    1. go into the array of objects which is caled fifaData
[x]    2. search each array index for each object key value pair stage to find those that have a value of "Final"
[]     3. run and if loop/foreach or filter
[]     4.
*/

// console.log(fifaData); //gives me the whole array of objects
// console.log(fifaData[333]); // this gives me the 333rd index.
// console.log(fifaData[10].Stage); //returns "group 1". This took me two tries and didn't work the first time since I used a lowercase s in stage. Keys in objects are case sensitive.


// ANSWER // Attempting to undo arrow function
// function getFinals(){
//     let finalsData = fifaData.filter(function(arr){
//         return arr.Stage === "Final";
//     });
// }
// console.log(getFinals());

// ANSWER //


// working answer
function getFinals(){
    let finalsData = fifaData.filter((arr) => (arr.Stage === "Final"));
        return finalsData;
    }
    console.log(getFinals());

// cosnt finalsData = fifaData.filter(function(stage){
//     return fifaData.stage === "final"
// });

// console.log(finalsData);
// I think this is going to be filter, because you are filtering out everything that is false, that fails your truth test.
// function getFinals(data) {
// let finalsData = fifaData.filter(asdf => year["Home Team Goals"] > 10);
// };
// console.log(getFinals());



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`
and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) { 


    const years = cb().map(function(curVal){
        return curVal.Year;
    });
    return(years);
};
console.log(getYears(getFinals));


// /////////////////////////////////////NOTES FROM OFFICE HOURS//////////////////////////////////////////////////////////////////
// //anon function, index/item, 
                // //.map() used for converting data. Will return a new array always. Does not manipulate original. It requires a return statement.
// const smallCityNames = places.map(function(curVal){ //represents OG data
//     return item.city.toLowerCase(); // needs a return and here you can use . Whatever you return here gets pushed into a new array of the name you establied in const
// });



                // //filter()
// //used for filtering data based on something that can be either true or false
// //automatically reurns a new array
// //return statement is required
// //if ture will be included, if false it will be excluded.
// const middleEast = places.filter(function(item){ //item is a name suggestion doesn't matter like paramenters. item, i, asdf, DOES NOT MATTER. functions like
//     return item.region === 'middle east';
// });
// // console.log(middleEast);
                // // .reduce()
// // does NOT return an array. It returns a single value.
// // Usually used for sums and products. [+ and *]
// // 2 required params
// ////accumulator
// ////item/current value
// ////starting point, initial value. if you are adding, you will likely start at zero. If you are multiplying it will likely be 1 (why? 0*anything is 0)
// ////requires a return
// const totalRating = places.reduce(function(acc, item){
//     console.log('I am the accumulator ${acc}');
//     console.log('I am the the current value ${item.rating}'); //item.rating because item IS palces.
//     return acc+item.rating;
// },0); //acc gets it's value <<<
// // console.log('I am the total value ${totalRating}');
// /////////////////////////////////////NOTES FROM OFFICE HOURS//////////////////////////////////////////////////////////////////
















/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and

determine the winner (home or away) of each `finals` game.

Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    const winners = cb().map(function(i){
        if(i["Home Team Goals"] > i["Away Team Goals"]){
        return i["Home Team Name"];
        } else {
        return i["Away Team Name"];
        }
    });
    return winners;
};

console.log(getWinners(getFinals));

        // return i.; //return i.Home Team Name if i.HomeTeamScore > i.AwayTeamScore. else return awayTeam Name.

































// Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
// Parameters: 
//  * callback function getWinners
//  * callback function getYears




function getWinnersByYear(yrs, wins) {

    // for(i in years)

    const years = yrs(getFinals);
    const winners = wins(getFinals);

        return `In ${years}, ${winners} won the world c\n up!`;
    console.log(yrs(getFinals));
    // console.log(wins(getFinals));
    
};
getWinnersByYear(getYears,getWinners);
console.log(getWinnersByYear(getYears,getWinners));

// pseudo-code
// STEP 1. I have a higher-order function called getWinnersByYears that takes two callback functions A. getWinners and B. getYears.
// STEP 2. One time for each index and it's paralell index in the other array and I need to populate:
// I need to zip together each year with its corresponding country that won.  return `In ${yrs}, ${wins} won the world cup!`;
// I need to call the function and feed it in my two existing functions. getYears and getWinners


















































/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns:
1. the average number of home team goals and
2. away team goals scored per match
(Hint: use .reduce and do this in 2 steps) */


// function getAverageGoals(data) {
// const avgHome = fifaData.reduce()
// const avgAway = 
// // return
// // return
// };
// getAverageGoals(fifaData);

// Brian micro task - return sum of all home team goals

// const homeGoals = getFinals;
// console.log(homeGoals);

// console.log(typeOf(getFinals()));

// reduce(function(acc, item){
    // return acc + item;
// },0);
