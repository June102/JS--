function getDateAgo(date, days) {
    return new Date(date.getTime() - (days * 24 * 3600 * 1000)).getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));