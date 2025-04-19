//Object Creation Practice 

//simple way to create a new object
const movie1 = {
    name :"Avatar 1",
    price: 200,
    languages: "english"
    
}
console.log(movie1)

//create a empty object then add properties using dot notation
const movie2 = {}
movie2.name = "Avatar 2"

movie2.price = 250
movie2.languages = "Telugu"
console.log(movie2)


//create a object using bracket notation
const movie3 = {}
movie3["name"] = "Superman"
movie3["price"] = 300;
movie3["Languages"] = "Hindi"

console.log(movie3)


// task 1 

const student1 = {
    "name" : "Prasad",
    "age" : 24,
    "grade" : "A"
}

console.log(student1)
console.log(student1["name"])

const student2 = {}

student2["name"] = "harsha";
student2["age"] = 24,
student2["grade"] = "B";

console.log(student2.name)
console.log(student2["age"])


const student3 = {}

student3.name = "Satish";
student3.age = 24;
student3.grade = "C";

console.log(student3)
console.log(student3["name"])
console.log(student3.grade)


//task2

const mobile1 = {
    "brand": "SamsungS23",
    "price": 78000,
    "color": "Black",

}

console.log(mobile1)
console.log(mobile1["brand"])
console.log(mobile1.price)

const mobile2 = {}

mobile2.brand = "Apple";
mobile2.price = 50000;

mobile2.color = "White";

console.log(mobile2)
console.log(mobile2["brand"]);
console.log(mobile2.price)


const mobile3 = {}

mobile3["brand"] = "Pixel"
mobile3["price"] = 45000;

mobile3["color"] = "Black";

console.log(mobile3)
console.log(mobile3["brand"])
console.log(mobile3.color)






