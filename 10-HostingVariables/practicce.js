

console.log(age)
var age;
var age  = 25 
console.log(age)


let obj1 = {
    name: "John",
    age: 30
}
console.log(obj1)

let obj2 = obj1
// console.log(obj2) 
obj2.name = "Prasad"
obj1.age = 28 
console.log(obj1)


function createuser(name){
    let userId = "user_" + Math.random();
    return {userId, name}
}

let user1 = createuser("Prasad")
let user2 = createuser("Crazydude")


console.log(user1)
console.log(user2)

// console.log(createuser("Prasadds"))



let obj3 = {
    name: "Prasad",
     rank:2,

    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }}

let obj4  = JSON.parse(JSON.stringify(obj3))
// let obj4 = obj3

obj4.address.street = "456 Elm St"
console.log(obj4)

console.log(obj3)


let num = 245 
let num2 = 458 

{
   let result = num + num2
    console.log(result)
}

console.log(result)