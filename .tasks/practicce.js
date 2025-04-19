
// //var excuations and memory allocations
// console.log(age)
// var age;
// var age  = 25 
// console.log(age)

// //Global variables accessible and  scope variables accessible
// let hero = "Mahesh Babu"

// function greetHero(){
//     console.log(age)
//    var age = 48 
//     console.log(`hi ${hero}`)
//     console.log(age)   
// }

// greetHero()

// let bestFilm = "Srimanthadu"
// console.log(`mahesh babu best film is ${bestFilm}`)


// //non -primitive values accessible
// let obj1 = {
//     name: "John",
//     age: 30
// }
// console.log(obj1)

// let obj2 = obj1
// // console.log(obj2) 
// obj2.name = "Prasad"
// obj1.age = 28 
// console.log(obj1)


// function createuser(name){
//     let userId = "user_" + Math.random();
//     return {userId, name}
// }

// let user1 = createuser("Prasad")
// let user2 = createuser("Crazydude")


// console.log(user1)
// console.log(user2)

// // console.log(createuser("Prasadds"))

// //shallow copy vs deep copy memory allocations and modifying 

// let obj3 = {
//     name: "Prasad",
//      rank:2,

//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     }}

// let obj4  = JSON.parse(JSON.stringify(obj3))
// // let obj4 = obj3

// obj4.address.street = "456 Elm St"
// console.log(obj4)

// console.log(obj3)


// // let num = 245 
// // let num2 = 458 

// // {
// //    let result = num + num2
// //     console.log(result)
// // }

// // console.log(result)



// const api = fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.address, data.address.city)
//         // data.forEach(user => console.log(user))
        
//       })


// const fectchData = async () => {
//   try {
//    await fetch("https://jsonplaceholder.typicode.com/users").then((res) => console.log(res.json()))
// console.log(fectchData)
//   } catch(e){
//     console.log(e)
//   } 
// } 

// fectchData()

console.log("10"+10)