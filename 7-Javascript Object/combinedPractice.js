//Array of objects 

const students = [
    {
        name:"Teja",
        age: 20,
        grade:"A"
    },
    {
        name:"Priya",
        age: 22,
        grade:"B"
    },
     {
        name:"Rahul",
        age: 21,
        grade:"C"
     }

]
console.log(students)
console.log(students[2].name)

const mobiles = [
    {
        brand:"Apple",
        model:"Iphone 12",
        price:100000
    },
    {
        brand:"Samsung",
        model:"Galaxy S21",
        price:120000
    },
    {
        brand:"Huawei",
        model:"P40 Pro",
        price:80000
    }
 
]

console.log(mobiles)
console.log(mobiles[1]["brand"])
console.log(mobiles[0].price)