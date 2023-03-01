function shuffle (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let j = Math.floor(Math.random() * (arr.length - i) + i);
        //console.log(j);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
}

let arr = [1, 2, 3];
let arr2 = [2, 6, 4, 8, 11];

shuffle(arr)
console.log(arr);
shuffle(arr)
console.log(arr);
shuffle(arr)
console.log(arr);

shuffle(arr2)
console.log(arr2);
shuffle(arr2)
console.log(arr2);
shuffle(arr2)
console.log(arr2);