function pow(num, power) {
    let tempNum = num;
    for (let i = 1; i<power; i++) {
        num*=tempNum;
    }
    return num;
}

console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(2,10));