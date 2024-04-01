//Loops : Loops are used to do some tas repeatedly until some condition is met

// 1. While Loop
let i = 1;
while(i<=10) {
    console.log(i);
    i++;
}

//1.1 Do-While Loop
let j = 1;
do{
    console.log(j);
    j++;
}while(j<=10);

//2. For Loop
let n = 10;
for(let i=1;i<=n;i++) {
    console.log(i);
}


//3. For-In Loop : Used to traverse over elements of an object
let obj = {
    "Name" : "Binay Kumar Lahiri",
    "Age" : 21,
    "Stream" : "CSE"
}

for (const key in obj) {
    console.log(key," : ",obj[key]);
}


//4. For-Of Loop : Used for iterating over any iterable like array, string etc.
let string = "Javascript";
for(let ch of string) {
    console.log(ch);
}