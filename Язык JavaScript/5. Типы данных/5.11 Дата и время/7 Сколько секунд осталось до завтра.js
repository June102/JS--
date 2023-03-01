function getSecondsToTomorrow() {
    let now = new Date();
    let nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.round((nextDay - now) / 1000);
}