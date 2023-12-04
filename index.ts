//Infer types (implicit types)
/*let userName = "Jitin Joseph";
userName = 0;
let age = 30;
age = "Jitin";*/

//Defining types (explicit types)
/*let userName:string = "Jitin Joseph";
let age:number = 30;
let isSubscribed:boolean = true;
let skills:string[] = ["PHP","HTML","CSS","JS"];//array of strings
//let skills1:number[] = ["PHP","HTML","CSS","JS"];//error
let count:number[]=[1,2,3,4];//array of numbers
let emptyArray:[] = [];
//object
let userDetail:{name:string; age:number; salary:number} = {
    name:"Jitin Joseph",
    age:30,
    salary:3000
};
userDetail.age=35;*/

//interface
/*interface Details{
    name:string;
    age:number;
    salary:number;
    getName:()=>void;
}
let userDetail:Details={
    name:"Jitin Joseph",
    age:30,
    salary:3000,
    getName() {
        console.log(this.name);
    },
};

let adminDetail:Details={
    name:"Admin",
    age:34,
    salary:3400,
    getName() {
        console.log(this.name);
    },
};*/
type Details={
    name:string;
    age:number;
    salary:number;
    getName:()=>void;
}
let userDetail:Details={
    name:"Jitin Joseph",
    age:30,
    salary:3000,
    getName() {
        console.log(this.name);
    },
};

let adminDetail:Details={
    name:"Admin",
    age:34,
    salary:3400,
    getName() {
        console.log(this.name);
    },
};