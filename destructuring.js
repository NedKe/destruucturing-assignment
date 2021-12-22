/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 25, 23];
//let john = ages[0];
//let mary = ages[1];
//let sara = ages[2];
let [john, mary, sara] = ages;
console.log(john, mary, sara);
// Destructuring objects
let jobs = {
    mike: "doctor",
    neda: "Scientist",
    ali: "developer"
};
let {mike, neda, ali} = jobs;
console.log(mike, neda, ali);
// Destructuring subsets
let languages = ["persian", "english", "arabic", "german"]
let [nedafirst, mikesecond] = languages;
console.log(nedafirst, mikesecond);
let [ , , hoda, eliza] = languages;
console.log(hoda, eliza);


let languages2 = {
    
    oneLanguage: "spanish",
    secondLanguage: "english", 
    thirdLanguage: "persian", 
    fourthLanguage:"german"
};
let {oneLanaguage, thirdLanguage} = languages2;
console.log(oneLanaguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "banana", "peach", "pear", "watermelon"]
let [firstFavorite, secondFavorite, ...others] = fruits;
console.log(firstFavorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods= {
    
    mamal: "ghormehsabzi",
    ramin: "goosht", 
    rona: "fish", 
    mona:"gheymeh"
};
let {mamal, ramin, ...rest} = favoriteFoods;
console.log(mamal);
console.log(ramin);
console.log(rest);

