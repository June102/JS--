function Calculator() {
    this["+"] = (a, b) => a + b;
    this["-"] = (a, b) => a - b;

    this.calculate = function(str) {
        let expr = str.split(" ");
        if (!isFinite(expr[0]) 
            || !this[expr[1]] 
            || !isFinite(expr[2])) {
            return NaN;
        }

        return this[expr[1]](+expr[0], +expr[2]);
    }

    this.addMethod = function (name, func) {
        this[name] = func;
    }
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3"));