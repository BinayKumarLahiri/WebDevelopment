//Functions are to modularize our code for better code readability and maintainability and increase code reusability

function add(a,b,c=0){
    //a and b are required but c is optional and had a default value of 0
    let sum = a+b+c;
    return sum;//Any Function may or may not return a value
}


//Invoking a function
let sum = add(5,3);
console.log(sum);
let sumWithC = add(5,3,4);
console.log(sumWithC);


//Arrow functions : Storing a funtion inside a variable
const Add = (a,b,c=0)=>{
    let sum = a + b + c;
    return sum;
}

let s = Add(5,3);
console.log(s);
