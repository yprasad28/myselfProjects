//non-primitives 

//Arrays
const nolanMovies = ["interstaller","tenet","oppenheimar","inception","shutter island"]
console.log("mind blowing Movies Ever: ", nolanMovies)
console.log("Number of Movies: ", nolanMovies.length)


//objects 

const movieDetails = {
    name: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    price : {
        normal: 250,
        premium: 350
    },
    showTime : ["10:00AM","02:00PM","06:00AM"]
}

console.log("Movie Details: ", movieDetails)
console.log("Number of Movies: ", movieDetails.showTime.length)


const favMovie = {
    name: "Bhaubali",
    director: "SS Rajamouli",
    year: 2015,
    genre: "historical/Drama",
    price: {
        normal: 150,
        premium: 200
    },
    actors : ["Rana","Prabhas","Tamanna","Anushuka","ramikrishna"]

}

console.log("Favorite Movie Details: ", favMovie)
console.log("Number of Actors:", favMovie.actors.length)
console.log("Movie Director:", favMovie.director)
console.log("Movie title:", favMovie["name"])


