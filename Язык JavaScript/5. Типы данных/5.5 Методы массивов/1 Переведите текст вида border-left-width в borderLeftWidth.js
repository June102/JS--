function camelize(str) {
    let words = str.split('-');
    words = words.map( (word, index) => index != 0 ? word[0].toUpperCase() + word.slice(1) : word )
    return words.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));