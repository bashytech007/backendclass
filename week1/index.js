// Asynchronous nature of node
let statement="first statement"
const statement2="second statement"
setTimeout(()=>{
  let statement="first statement"
  console.log(statement);
},2000)
setTimeout(()=>{

  console.log(statement2);
},2000)
console.log('second statement');
console.log('third statement');
// class,objects and arrays,accessing items(dot and bracket notation)
const animals={
  name:"dog",
  sound:"bark",
}
const Animal={
 name:"dog",
 sound:"bark"
}
class Animals {
 constructor(name,sound){
 this.name=name;
 this.sound=sound;
 }
}
const newAnimal=new Animals('pig','grunt')
const newAnimal2=new Animals('cow','mow')
const animalCollection=[newAnimal]
console.log(animals['name'])
console.log(newAnimal)
// const animalCollection=['dog','cow','peacoock']
animalCollection.push(newAnimal2)
console.log(animalCollection[1].sound);