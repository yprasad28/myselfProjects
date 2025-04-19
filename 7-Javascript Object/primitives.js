//understanding primitive 


let ticketPrice = 26;
console.log("Type of ticketPrice:", typeof ticketPrice);


let movieName = "Spiderman"

console.log("Type of movieName:", typeof movieName);

let isAvaliable  = true;
console.log("Type of isAvaliable:", typeof isAvaliable)

let showTime;
console.log("Type of showTime:", typeof showTime)

let offers = null;
console.log("Type of offers:", typeof offers)

let data = null;

if (data === null) {
    console.log("Data is null");
} else if (typeof data === "object") {
    console.log("Data is an object");
} else {
    console.log("Data is of a different type");
}

// //Historical Reason:
// This behavior dates back to the early days of JavaScript.
//  When JavaScript was first created, the representation of a null value at the binary level 
//  was similar to an empty object reference, and thus, typeof null was defined to return "object". 
//  Changing this now would break existing code that relies on this behavior, so it has remained as is object.




let hundred = "100";
if (hundred === 100){
    console.log("hundred is equal to 100");
    
} else if (hundred === "100"){
    console.log("hundred is equal to '100' but string");
}

