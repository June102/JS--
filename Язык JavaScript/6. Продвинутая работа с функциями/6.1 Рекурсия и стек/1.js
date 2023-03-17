function sumToFor(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumToRec(n) {
    if (n == 1) return 1;
    return n + sumToRec(n - 1);
}

function sumToAr(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(100));
console.log(sumToRec(100));
console.log(sumToAr(100));