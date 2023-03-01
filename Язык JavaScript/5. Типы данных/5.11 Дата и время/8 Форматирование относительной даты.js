function formatDate(date) {
    let dateSub = (new Date().getTime() - date) / 1000;
    if (dateSub < 1) return "прямо сейчас";
    if (dateSub < 60) return `${dateSub} сек. назад`;
    if (dateSub < 3600) return `${Math.round(dateSub / 60)} мин. назад`;
    
    year = date.getFullYear().toString().slice(-2);
    month = ("0" + (date.getMonth() + 1)).slice(-2);
    day = ("0" + date.getDate()).slice(-2);
    hour = ("0" + date.getHours()).slice(-2);
    minutes = ("0" + date.getMinutes()).slice(-2);

    return `${day}.${month}.${year} ${hour}.${minutes}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));