// Arrays are data type  used to store more than one elements in javascript the elements can be of any types

let array = [1,2,3,4,5,6];
console.log(array);
console.log("Type of Array : " , typeof array);
console.log("Length of array : " , array.length)
console.log(array[2]);
array[2] = 10;
console.log(array[2]);


// Array Methods
//1. toString(): Changes the array to a comma separated string
console.log(array.toString());

// 2. join() : Joins every element of an array with an separator
console.log(array.join(" and "));

// 3. pop() : Removes Element from end and returns the new length of the array
array.pop();
console.log(array);

//4. push() : adds an element in the end of the array and returns the new length of the array

array.push("Harry");
console.log(array);

// 5. shift() : Removes first element and returns it

let removed = array.shift();
console.log(array, " : ",removed);

// 6. unshift() : Inserts an element to the front of the array

array.unshift("start");
console.log(array);

//7. concat() : Merges to array

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9];
let num3 = num1.concat(num2);
console.log(num3);

//8. sort() : sorts the array

let num = [5,1,4,2,3];
num.sort();
console.log(num);

//9. slice() : returns a new array from the specified indices

console.log(array.slice(1,5));

//10. reverse() : reverses the array

array.reverse();
console.log(array);



//Iterating over an array
//1. Using for loop
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

//2. Using for-each

numbers.forEach((value)=>{
    console.log(value);
})

//Using for of
for (const number of numbers) {
    console.log(number);
}


//Some special methods
//1. map() : creates a new array by running an callback on every element of another array

let squareNumber = numbers.map(e=>{
    return e**2;
})
console.log(squareNumber);


//2. filter() : creates a new array by running an callback on every element of another array by taking only those elements for which the callback return true

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