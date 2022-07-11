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