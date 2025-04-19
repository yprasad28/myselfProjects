function sentencePalindrome(s){
    let str_arr =[]
    for(let i=0; i < s.length;i++){
        let ch = s[i]
        if(/[a-zA-Z0-9]/.test(ch)){
            str_arr.push(ch.toLowerCase())
        }
    }
    console.log(str_arr)
    let rev_str_arr = str_arr.reverse().join("")
    console.log(rev_str_arr)

    return str_arr.join("") === rev_str_arr
}

let s = "Abc 012..##  10cbA";

console.log(sentencePalindrome(s) ? "True" : "False");






