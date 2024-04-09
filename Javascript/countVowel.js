const vowels = "aeiouAEIOU";
const prompt = require("prompt-sync")();
let str = prompt("Enter a str : ");
let vowel = 0;
for(let ch of str)if(vowels.includes(ch))vowel += 1;
console.log(vowel);