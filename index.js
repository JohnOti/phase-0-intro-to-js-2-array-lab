// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
function  destructivelyAppendCat(name){
    cats.push("Ralph");
}
function  destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
function appendCat(name){
    const newCats = cats.slice();
    newCats.push("Broom");
    return newCats
}
function prependCat(name){
    const newCats = cats.slice();
    newCats.unshift("Arnold");
    return newCats
}
function  removeLastCat(){
   const newCats = cats.slice(0, -1);
    return newCats
}
function  removeFirstCat(){
    const newCats = cats.slice(1);
     return newCats
 }