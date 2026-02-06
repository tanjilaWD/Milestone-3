// Problem 1: Word Frequency Counter
// Function name: wordFrequency(sentence)
// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences


// Ignore extra spaces


// Test case 1
// Input: "I love JS and I love coding and JS is fun"
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

function wordFrequency(sentence){
    let words = sentence.split(" ");
    let wordsCount = {};
    for(let word of words){
        let wordLowerCase = word.toLowerCase();
        if(wordsCount.hasOwnProperty(wordLowerCase)){
            wordsCount[wordLowerCase]++;
        }
        else{
            wordsCount[wordLowerCase] = 1;
        }
    }
   return wordsCount;
}
let output = wordFrequency("I love JS and I love coding and JS is fun Fun fUN");
console.log(output);