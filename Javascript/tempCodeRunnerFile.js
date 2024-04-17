
let elements = [1,2,3,4,5,6,7,8,9,10];
let isEven = (e) => {
    if(e%2==0)return true;
    return false;
}
console.log(elements.filter(isEven));

//3. reduce() : returns a value after running a function on the entire array
let add = (a,b)=>{
    return a+b;
}
console.log(elements.reduce(add));