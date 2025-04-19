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

// console.log(age)



const groceryItemsPrices = [250,100,85,75,600,100,50,952]



const example = groceryItemsPrices.map(groceryItemsPrice => groceryItemsPrice * 1)
console.log(example)


const above_100 = groceryItemsPrices.filter(groceryItemsPrice => groceryItemsPrice >= 100)
console.log(above_100)

const total_price = groceryItemsPrices.reduce((sum,groceryItemsPrice) => sum + groceryItemsPrice,0)
console.log(total_price)

console.log(`number of items purcheased: ${groceryItemsPrices.length}`)