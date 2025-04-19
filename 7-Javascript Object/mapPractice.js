//MAP FUNCTION EXERCISES

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const eightTable = numbers.map((num) => num * 8);
console.log("originalNumbers", numbers);
console.log("Mulitple with 8", eightTable);

// const movieList = [
//     { title: "Movie 1", price: 200 },
//     { title: "Movie 2", price: 150 },
//     { title: "Movie 3", price: 300 }
// ];

// const formattedMovies = movieList.map(movie => {
//     return {
//         title: movie.title,
//         formattedPrice: `₹${movie.price}`
//     };
// });

// console.log("Formatted Movies:", formattedMovies);

const movies = [
  { title: "Avengers", price: 20 },
  { title: "Inception", price: 30 },
  { title: "Ironman", price: 45 },
];

const formattedMovies = movies.map((movie) => {
  return {
    title: movie.title,
    formattedPrice: `$${movie.price}`,
  };
});

console.log("Formatted Movies:", formattedMovies);

const showTimings = [
  {
    title: "Daku Maharaja",
    price: 200,
    seats: 50,
    showTime: "10:00AM",
    rating: 4.2,
  },
  {
    title: "Game Changer",
    price: 250,
    seats: 80,
    showTime: "02:00PM",
    rating: 3.8,
  },
  {
    title: "sankrathiki vasthunmu",
    price: 280,
    seats: 0,
    showTime: "06:00PM0",
    rating: 4.5,
  },
];

const availabilityTickets = showTimings.map((timing) => {
  return {
    title: timing.title,
    time: timing.showTime,
    ratings: timing.rating,
    seatsAvailable: timing.seats > 0 ? "Available" : "HouseFull",
    ticketPrice: `₹${timing.price}`,
  };
});

console.log("Show Availability of Movies: ", availabilityTickets);

// Mini Movie Booking System

const movieCollection = [
  {
    title: "Devara",
    rating: 4.2,
    price: 200,
    Category: "Action/Thirller",
    seats: 20,
    showTime: "10:00AM",
    // showAvailable:["Sunday","Monday"]
  },
  {
    title: "Pushpa-2",
    rating: 4.4,
    price: 250,
    Category: "Action/Drama",
    seats: 0,
    showTime: "02:00PM",
    // showAvailable:["Sunday","Monday"]

  },
  {
    title: "Amaran",
    rating: 4.3,
    price: 200,
    Category: "Action/TrueStory",
    seats: 50,
    showTime: "06:0PM",
    // showAvailable:["Sunday","Monday"]
  },
  {
    title: "Kaa",
    rating: 4.0,
    price: 180,
    Category: "Drama/Suspense",
    seats: 30,
    showTime: "09:00PM",
    // showAvailable:["Sunday","Monday"]
  },
];


const availabieTickets = movieCollection.map(moviename => {
    return {
        title: moviename.title,
        time: moviename.showTime,
        ratings: moviename.rating,
        seatsAvailable: moviename.seats > 0 ? "Available": "HouseFull",
        ticketPrice: `₹${moviename.price}`,
        
    }
})


console.log("Show Availability of Movies: ", availabieTickets);