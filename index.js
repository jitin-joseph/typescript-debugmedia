//Infer types (implicit types)
/*let userName = "Jitin Joseph";
userName = 0;
let age = 30;
age = "Jitin";*/
var userDetail = {
    name: "Jitin Joseph",
    age: 30,
    salary: 3000,
    getName: function () {
        console.log(this.name);
    },
};
var adminDetail = {
    name: "Admin",
    age: 34,
    salary: 3400,
    getName: function () {
        console.log(this.name);
    },
};
