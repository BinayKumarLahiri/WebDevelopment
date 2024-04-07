class student {
    college;
    constructor(name,stream,roll) {
        this.name = name;
        this.stream = stream;
        this.roll = roll;
    }
    study() {
        console.log(this.name," is Studing.");
    }
    code() {
        console.log(this.name, " is Coding.");
    }
    eat() {
        console.log(this.name," is Eating");
    }
    sleep() {
        console.log(this.name," is Sleeping");
    }
    get college() { //Used to get the value of college invoked when we say obj_name.college
        return this._college;
    }
    set college(clg) {
        if(clg==""){
            console.log("Empty Name");
            return;
        }
        this._college = clg;
    }
}

class professional extends student {//Inheritance: inherits the properties of the parent class student
    constructor(name,company,post) {
        super(name,null,null);//super keyword is used to use the members of the parent class like super.code() etc. only super() invokes the constructor of the parent class
        this.company = company;
        this.post = post;
    }
    work() {
        console.log(this.name," is working.");
    }
    sleep() {//Method overriding : changing the parent method in the child classs
        console.log(this.name," can't sleep because he is working.");
    }
}

let rajesh = new student("Rajesh","CSE","100320405");
console.log(rajesh);
rajesh.eat();

let vikram = new professional("Vikram","Google","SDE");
console.log(vikram);
vikram.work();
vikram.eat();


rajesh.sleep();
vikram.sleep();

rajesh.college = "IIT Delhi";
console.log(rajesh.college);



//instanceof operator
console.log(vikram instanceof professional);//returns true because vikram is an instance of professional class
console.log(vikram instanceof student);//returns true because vikram is an instance of professional class and professional is a child class of student
