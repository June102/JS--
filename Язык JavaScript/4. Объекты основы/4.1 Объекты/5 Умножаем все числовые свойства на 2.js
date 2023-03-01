function multyplyNumeric(obj) {
    for (let param in obj) {
        if (typeof obj[param] == 'number') {
            obj[param] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: "300",
    title: "My menu",
};

multyplyNumeric(menu);

for (let param in menu) {
    console.log(menu[param]);
}