
// const movie1 = {
//     title : "Daaku Maharaja",
//     genre : "Drama/action",
//     time : "10AM",
//     seats : 60,
//     rating: 4.2
// }

// const movie2 = {
//     title : "Game Changer",
//     genre : "Drama/Political",
//     time : "1PM",
//     seats : 50,
//     rating: 4.0
// }

// console.log(movie2)
// console.log(movie1)

const api = fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        console.log(data.address, data.address.city)
        // data.forEach(user => console.log(user))
        
      })