// Array Methods
// Functiond function declaration,Function expresson(arrow functions),IIFE(Imediate)
//Global __dirname __filename,require


const animals=[];
//addding and item to the array
//remove from the front
//remove from the back
//iterate through the aray
//Search the array for an item
animals.push('cat')
animals.push('dog')
animals.push('fish')
animals.push('pig')
// animals.pop()
// animals.shift()
animals.unshift('cow')
animals.map((animal)=>{
})
const cat=animals.indexOf('cat')
// console.log(cat);
console.log(animals);
// console.log(animals.indexOf('dog'));
const newAnimals=animals.filter((animal)=>animal.length > 3)
let newAnimal=animals.find((animal)=>animal=='dog'
//return animal
)
console.log(newAnimals)
console.log(newAnimal)
// newAnimal='elephant'
console.log(animals)
//Functions



Addnumber(3,4)
function Addnumber(a,b){
  const total=a+b
  console.log(total)
}//Function declaration



const Addnumbers=(a,b)=>{
  const total=a+b
  console.log(total)
}//Function expression
Addnumbers(5,6);

const name='john doe';
module.exports={Addnumbers,name}