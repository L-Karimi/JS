let a=["bananas","mangoes","apples"]
let c= new Array("Banana","Kiwi")
console.log(a)
console.log(c.push("tomatoes"))
let b =c.unshift("tomatoes")
console.log(b)
let d= c.map(item=>"I love " +item)
console.log(d)
function people(){
    console.log("You guys")
}
function students(a,callback){
    console.log(a)
    console.log(callback)
}
students(26,people())

console.log(a.splice(0,2))
console.log(a)
// let p=(
//     age=22,
//     country="Kenya",
//     hobby (function(){
//         console.log("My name is " + this.name + "and my hobby is is cooking")
//         return "my favourite hobby is singing";
//     })
   
// );
console.log(p["age"]);
console.log(p.country);
var person=new Object(p);
console.log(person.name);
// person("age")=35;
console.log(p);

for(key of Object.entries(person)){
    console.log(key.value)
}
// freezes a function and prevents modificatuon-like using const
Object.freeze(person)
p["school"] ="AkiraChix"
console.log(person)
 