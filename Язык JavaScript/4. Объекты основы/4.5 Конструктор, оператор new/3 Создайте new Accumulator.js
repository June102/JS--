function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let addValue = prompt('Число для добавления в сумму', 0);
        if (Number(addValue)) {
            this.value += +addValue;
        }
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);