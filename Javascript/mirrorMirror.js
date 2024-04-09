const prompt = require("prompt-sync")();
let str = prompt("Enter a String : ");
let newStr = str.concat("");
for(let i=str.length-1;i>=0;i--)newStr = newStr + str[i];
console.log(newStr);




