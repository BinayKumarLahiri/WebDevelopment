//Javascript Operators

let a = 5;
let b = 3;


//Arithmatic Operators
console.log(a, " + ",b," = ",a+b);
console.log(a, " - ",b," = ",a-b);
console.log(a, " * ",b," = ",a*b);
console.log(a, " / ",b," = ",a/b);
console.log(a, " % ",b," = ",a%b);
console.log(a, " ** ",b," = ",a**b);
console.log(a, " ++  = ",a++);
console.log("++",a, " = ",++a);
console.log(a, " --  = ",a--);
console.log("--",a, " = ",--a);


// Assignment Operators

a += 5;
console.log(a);
a -= 5;
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
a %= 5;
console.log(a);
a = 5;
a **= 5;
console.log(a);



//Equal to
//1. == : Only checks the value
//2. === : Checks the type as well as value



//Conditional Statements

let age = 20;

if(age>=18 && age<=60) {
    console.log("You Can Drive :)");
}else if(age<18 || age>60) {
    console.log("You Can't Drive");
}else {
    console.log("Invalid Age");
}



//Ternary Operator
let Status = (age>=18)?"Mature":"Immature";
console.log(Status);