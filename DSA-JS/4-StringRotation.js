let s = "GeeksForGeeks"
let d = 2 
 

function StringRotation(s,d){
    return s.slice(d) + s.slice(0,d)
    
}

console.log(StringRotation(s,d))