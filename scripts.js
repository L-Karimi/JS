const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)



console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)



const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows



console.log(lastFruit)  // lemon



const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products
  
  console.log(shoppingCart) // -> all shoppingCart in array
  console.log(shoppingCart[0]) //  -> Milk
  console.log(shoppingCart[7]) //  -> Sugar
  
  let lastIndex = shoppingCart.length - 1;
  console.log(shoppingCart[lastIndex]) //  -> Sugar


  const shopping =["bananas","sugar","tissues","garlic","juice","bathing soap","boks"]
  let new_list=shopping.pop("mangooes")
  console.log(new_list[1])
if(new_list ===-1){
    console.log("THis fruit does not exist in the array")
}else{
    console.log("THis fruit exists in the array")
}


let x = Array("Lucy","Judy","AnnEster","Grace","Jackline","Wilbroader","Nancy","Elizabeth")
console.log(x)
let y = x.fill("MaryAnn",3)
console.log(y)
console.log(x.concat(y))
console.log(x.length)
console.log(x.indexOf("MaryAnn"))

if ("MaryAnn" ===-1){
    console.log("This name does not exist in my list")
}else{
    console.log("This definately exists")
}
console.log(x.lastIndexOf("MaryAnn"))
console.log(x.includes("Annet"))

const ages =[23,45,6,78,67,86,5,33,3,322,1,1,90]
let newAges=[]
for(var i=0;i<ages.length;i++){
    if (ages[1]=newAges){
        newAges[i]=ages
    }
    console.log(i**3)
}

console.log(x.sort())
function check(arr, el) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === el) {
        return true;
      }
    }
    return false;
  }