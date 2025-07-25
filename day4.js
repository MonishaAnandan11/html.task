let arrowFunction=()=>{

}

//an array of object is a collection where each element is an object with properties.
//this is used to group related data together in a structured way


let details={
    name:"js",
    totalmark:100,
    subject:{
        dbms:10,
        java:100
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;
    }


}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.sum())


//object destructuring
//is a syntax in javascript that allows you to extract values from object and assign them to variables in a clean and readable way.
let person={
    job:"softwareTester",
    salary:25000,
}
const {job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);


let arr=new Array(1,2,"three")
console.log(arr[2]);
let arr2=["js",true,false];
//array destructuring
const[name,b1,b2]=arr2;
console.log(name)


//filter-Returns a new array containing only the element that match a condition

let student=[
    {name:"monisha",grade:"A"},
    {name:"monika",grade:"B"}
]
let gradestudent=student.filter(student => studen.grade==="A")
console.log(gradestudent);


let names=["monisha","monika","rinisha"];
name.splice(1,1, "monika");
console.log(names);