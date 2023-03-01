function aclean(arr) {
    let mapArr = new Map();
    for (let elem of arr) {        
        mapArr.set(elem.toLowerCase().split("").sort().join(""), elem);
    }
    
    return Array.from(mapArr.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));