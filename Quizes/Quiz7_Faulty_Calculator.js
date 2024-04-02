//This a Faulty  Terminal Calculator which performs wrong operations for 10% of the time

//Giving Instructions
// 1. add : addition (add num1 num2)
// 2. sub : subtraction (sub num1 num2)
// 3. mul : multiplication (mul num1 num2)
// 4. div : division (div num1 num2)

const prompt = require('prompt-sync')();
let ins;
do{
    let str = prompt(">> ");
    ins = str.split(" ");
    let num = Math.random();
    let op = ins[0];
    let a = parseInt(ins[1]);
    let b = parseInt(ins[2]);
    if(num>0.1) {
        switch(op) {
            case "add":
                console.log(a + b);
                break;
            case "sub":
                console.log(a - b);
                break;
            case "mul":
                console.log(a * b);
                break;
            case "div":
                console.log(a / b);
                break;
            case "exit" :
                break;
            default:
                console.log("Invalid Instruction");
                break;
        }
    }else {
        switch(op) {
            case "add":
                console.log(a * b);
                break;
            case "sub":
                console.log(a + b);
                break;
            case "mul":
                console.log(a / b);
                break;
            case "div":
                console.log(a - b);
                break;
            case "exit" :
                break;
            default:
                console.log("Invalid Instruction");
        }    
    }
}while(ins[0]!="exit");