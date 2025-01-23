

let totalMarks = 100; //global scope

function topper(){
    let marks = 88; //local scope
    console.log(`Total marks of Maths Test is ${totalMarks} but Ramesh got a marks is`, marks);

    if(marks >= totalMarks){ //block scope
        console.log("So, Ramesh Got a 1st Rank")
    } else {
        console.log("So, Ramesh Got a 2nd Rank")
    }

}

topper()