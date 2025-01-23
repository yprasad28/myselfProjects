//Global scope is anywhere is accessible from defined variables
//It's inside the scope or outside the scope of the function

let globalStar = "RamCharan is the Global Star"

function outerFunction() {
    let localStar = "Sampuresh babu is the Local Star"
    console.log(globalStar)
    console.log(localStar)
}

outerFunction()

console.log(globalStar) // "RamCharan is the Global Star"
//here varaible is declared outside the scope of the function thats why its accessible

console.log(localStar) // undefined becasue not declared in outside

//Block Scope 
// Here block of declared variables are accessible in block scope only not in globally
if (true){
    let blockVar = "Im a block star"
    const iAlsoBlock = "me too"
    var notActuallyBlock = "But im in a block"

    console.log(blockVar)
    console.log(iAlsoBlock)
    console.log(notActuallyBlock)
    
}

console.log(blockVar) //In globally(outside)tried to access the block scope variables will cause error 



