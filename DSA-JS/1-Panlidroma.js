
function isPanildroma(p){
    let p_len = p.length
 
    for(let i = 0; i <=p_len;i++){
        if (p[i] !== p[p_len - i - 1]){
            return false
        }
    }
    return true
    
}

let p = "PSaaSP"
console.log(isPanildroma(p))
