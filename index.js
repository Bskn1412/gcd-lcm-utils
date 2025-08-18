function gcd(a, b){
    while (b!= 0){
        let k = a % b;  //a - Math.floor(a/b) * b
        a = b;
        b = k;
    }
    return a;
}

function lcm(a, b){
    if (a===0 || b===0) return 0;
    return Math.abs(a * b) / gcd(a,b);
}

module.exports = {gcd, lcm} ;
