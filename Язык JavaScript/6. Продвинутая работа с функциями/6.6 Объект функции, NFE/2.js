function sum(a) {
    let currSum = a;

    function sumIn(b) {
        currSum += b;
        return sumIn;
    }

    sumIn.toString = () => {return currSum;}

    return sumIn;
}

console.log(String(sum(1)(2)));
console.log(String(sum(1)(2)(3)));
console.log(String(sum(5)(-1)(2)));
console.log(String(sum(6)(-1)(-2)(-3)));
console.log(String(sum(0)(1)(2)(3)(4)(5)));