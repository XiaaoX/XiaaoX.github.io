var company= new Object();
company.name="Facebook";

company.ceo=new Object();
company.ceo.firstName="Mark";
company.ceo.age=34;

console.log(company);
console.log(company.name);
console.log(company.ceo.firstName);
console.log(company.ceo.age);

var Facebook={
    name:"Facebook",
    ceo:{
        name: "Mark Zuckerberg",
        age: 34
    },
    "users":34000
};
console.log(Facebook.ceo.name);
console.log(Facebook["users"]);