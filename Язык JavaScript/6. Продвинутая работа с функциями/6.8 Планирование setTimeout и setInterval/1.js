/*function printNumbers(from, to) {
    for (let i = from; i <= to; i++) {
        setTimeout(console.log, 1000 * (i - from + 1), i);
    }
}*/

function printNumbers (from, to) {
    let i = from;
    let timer = setInterval(function() {
        console.log(i); 
        if (i == to) 
            clearInterval(timer);
        i++;
    }, 1000);   
}

function printNumbersRec (from, to) {
    setTimeout(function inPrint(a, b) {
        console.log(a);
        if (a < b)
            setTimeout(inPrint, 1000, a + 1, b);
    }, 1000, from, to);
}

printNumbersRec(3, 7);