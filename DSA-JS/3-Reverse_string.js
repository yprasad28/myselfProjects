



function ReverseString(s){
    let str_arr = [];

    for(let i = 0; i < s.length; i++){
        str_arr.push(s[i])
    }
    return str_arr.reverse().join('')
}

let s =  "YamalaDurgaPrasad"
console.log(ReverseString(s))