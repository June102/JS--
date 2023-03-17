function Apple(color) {
    this.color = color;
}

Apple.prototype = {//прототип без constructor - будет ошибка
    state: 'fresh'
}

let apple1 = new Apple('red');
let apple2 = new apple1.constructor('green');

console.log(apple2.color);